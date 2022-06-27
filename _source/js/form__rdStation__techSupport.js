document.querySelectorAll('.js-techSupport').forEach((form) => {
    form.addEventListener('submit', (e) => {
        // form fields
        const formTechFields = {
            "name" : document.getElementById('techSupport_nome').value,
            "cnpj" : document.getElementById('techSupport_cnpj').value,
            "email" : document.getElementById('techSupport_email').value,
            "phone" : document.getElementById('techSupport_tel').value,
            "subject" : document.getElementById('techSupport_subject').value,
            "receptor" : document.getElementById('techSupport_receptor').value,
            "msg" : document.getElementById('techSupport_msg').value,
        }

        // set receptor
        let thisReceptor = rdStation.funils.suporte_tecnico
        if (formTechFields.receptor === 'com') {
            thisReceptor = rdStation.funils.suporte_comercial
        } else if (formTechFields.receptor === 'adm') {
            thisReceptor = rdStation.funils.suporte_administrativo
        }

        // rdStation fields
        const rdStationFields = {
            "deal": {
                "name": formTechFields.subject + ' - ' + formTechFields.name,
                "rating": 1,
                "deal_stage_id": thisReceptor,
                "deal_custom_fields": [
                    {
                        "custom_field_id": rdStation.customFields.msg,
                        "value": formTechFields.msg
                    },
                    {
                        "custom_field_id": rdStation.customFields.cnpj,
                        "value": formTechFields.cnpj
                    },
                    {
                        "custom_field_id": rdStation.customFields.utm_source,
                        "value": cForm__hiddenFields.utm_source
                    },
                    {
                        "custom_field_id": rdStation.customFields.utm_medium,
                        "value": cForm__hiddenFields.utm_medium
                    },
                    {
                        "custom_field_id": rdStation.customFields.utm_campaign,
                        "value": cForm__hiddenFields.utm_campaign
                    },
                    {
                        "custom_field_id": rdStation.customFields.utm_term,
                        "value": cForm__hiddenFields.utm_term
                    },
                    {
                        "custom_field_id": rdStation.customFields.utm_content,
                        "value": cForm__hiddenFields.utm_content
                    },
                    {
                        "custom_field_id": rdStation.customFields.url,
                        "value": cForm__hiddenFields.url
                    }
                ]
            },
            "contacts": [
                {
                    "name": formTechFields.name,
                    "emails": [
                        {
                            "email": formTechFields.email
                        }
                    ],
                    "phones": [
                        {
                            "phone": formTechFields.phone,
                            "type": "work"
                        }
                    ],
                    "legal_bases": [
                        {
                            "category": "data_processing",
                            "type": "consent",
                            "status": "granted"
                        },
                        {
                            "category": "communications",
                            "type": "vital_interest",
                            "status": "granted"
                        }
                    ]
                }
            ],
            "deal_source": {
                "_id": rdStation.source
            },
            "organization": {
                "_id": chatbotLeonora.rdstation.organization
            }
        }

        // send
        if (!form.querySelectorAll('li.js-error').length) {
            sendLeadToRDStation(form, rdStationFields);
        }
    })
});