document.querySelectorAll('.js-clientQualificationForm').forEach((form) => {
    form.addEventListener('submit', (e) => {
        // form fields
        const formQualificationFields = {
            "name" : document.getElementById('clientQualification_nome').value,
            "cnpj" : document.getElementById('clientQualification_cnpj').value,
            "email" : document.getElementById('clientQualification_email').value,
            "phone" : document.getElementById('clientQualification_tel').value,
            "urgency" : document.getElementById('clientQualification_urgency').value,
            "averagePrice" : document.getElementById('clientQualification_averagePrice').value,
            "paymentMethod" : document.getElementById('clientQualification_paymentMethod').value,
            "msg" : document.getElementById('clientQualification_msg').value,
        }

        // calculate rating
        let leadRating = 1;
        let leadFunil = rdStation.funils.leads_naoFiltrados;
        if (formQualificationFields.paymentMethod === 'Boleto à prazo') {
            if ((formQualificationFields.averagePrice === 'Até R$ 2.000,00') || (formQualificationFields.averagePrice === 'R$ 2.000,00 até R$ 4.000,00')) {
                if (formQualificationFields.urgency === 'Alta') {
                    leadFunil = rdStation.funils.leads_mornos;
                    leadRating = 2;
                } else {
                    leadFunil = rdStation.funils.leads_frios;
                    leadRating = 1;
                }
            } else {
                if (formQualificationFields.urgency === 'Alta') {
                    leadFunil = rdStation.funils.leads_quentes;
                    leadRating = 4;
                } else if (formQualificationFields.urgency === 'Média') {
                    leadFunil = rdStation.funils.leads_mornos;
                    leadRating = 3;
                } else {
                    leadFunil = rdStation.funils.leads_mornos;
                    leadRating = 2;
                }
            }
        } else {
            if (formQualificationFields.urgency === 'Alta') {
                if ((formQualificationFields.averagePrice === 'Até R$ 2.000,00') || (formQualificationFields.averagePrice === 'R$ 2.000,00 até R$ 4.000,00')) {
                    leadFunil = rdStation.funils.leads_quentes;
                    leadRating = 4;
                } else {
                    leadFunil = rdStation.funils.leads_quentes;
                    leadRating = 5;
                }
            } else if (formQualificationFields.urgency === 'Média') {
                if ((formQualificationFields.averagePrice === 'Até R$ 2.000,00') || (formQualificationFields.averagePrice === 'R$ 2.000,00 até R$ 4.000,00')) {
                    leadFunil = rdStation.funils.leads_mornos;
                    leadRating = 3;
                } else {
                    leadFunil = rdStation.funils.leads_quentes;
                    leadRating = 4;
                }
            } else {
                leadFunil = rdStation.funils.leads_mornos;
                leadRating = 2;
            }
        }

        // rdStation fields
        const rdStationFields = {
            "deal": {
                "name": formQualificationFields.name,
                "rating": leadRating,
                "deal_stage_id": leadFunil,
                "deal_custom_fields": [
                    {
                        "custom_field_id": rdStation.customFields.msg,
                        "value": formQualificationFields.msg
                    },
                    {
                        "custom_field_id": rdStation.customFields.averagePrice,
                        "value": formQualificationFields.averagePrice
                    },
                    {
                        "custom_field_id": rdStation.customFields.urgency,
                        "value": formQualificationFields.urgency
                    },
                    {
                        "custom_field_id": rdStation.customFields.paymentMethod,
                        "value": formQualificationFields.paymentMethod
                    },
                    {
                        "custom_field_id": rdStation.customFields.cnpj,
                        "value": formQualificationFields.cnpj
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
                    "name": formQualificationFields.name,
                    "emails": [
                        {
                            "email": formQualificationFields.email
                        }
                    ],
                    "phones": [
                        {
                            "phone": formQualificationFields.phone,
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