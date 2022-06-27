const cForm__techSupport = '' +
    '<div class="c-formTechSupport">' +
        '<p>Preencha o formulário com o máximo de detalhes possível, vamos responder em breve via e-mail ou Whatsapp.</p>' +
        '<form class="c-form js-techSupport">' +
            '<ul>' +
                '<li class="u-fw60">' +
                    '<label for="techSupport_nome">Nome completo' + ' *</label>' +
                    '<input type="text" id="techSupport_nome" class="js-fieldValidation__fullName' +
    ' js-fieldRequired">' +
                    '<span class="js-error">Preencha seu nome completo corretamente.</span>' +
                '</li>' +
                '<li class="u-fw40">' +
                    '<label for="techSupport_cnpj">CNPJ *</label>' +
                    '<input type="text" id="techSupport_cnpj" class="js-fieldMask__cnpj' +
    ' js-fieldValidation__cnpj js-fieldRequired">' +
                    '<span class="js-error">CNPJ Inválido</span>' +
                '</li>' +
                '<li class="u-fw60">' +
                    '<label for="techSupport_email">E-mail? *</label>' +
                    '<input type="text" id="techSupport_email" class="js-fieldValidation__email">' +
                    '<span class="js-error">Seu e-mail deve possuir @ e um domínio válido.</span>' +
                '</li>' +
                '<li class="u-fw40">' +
                    '<label for="techSupport_tel">Telefone / Whatsapp*</label>' +
                    '<input type="text" id="techSupport_tel" class="js-fieldMask__phone js-fieldValidation__phone">' +
                    '<span class="js-error">Telefone inválido</span>' +
                '</li>' +
                '<li class="u-fw60">' +
                    '<label for="techSupport_subject">Assunto *</label>' +
                    '<input type="text" id="techSupport_subject" class="js-fieldValidation__subject">' +
                    '<span class="js-error">Digite um assunto</span>' +
                '</li>' +
                '<li class="u-fw40">' +
                    '<label for="techSupport_receptor">Destinatário *</label>' +
                    '<div class="c-form__select">' +
                        '<select id="techSupport_receptor" class="js-fieldValidation__select">' +
                            '<option value="Selecione">Selecione</option>' +
                            '<option value="com">Suporte Comercial</option>' +
                            '<option value="adm">Suporte Administrativo e/ou Financeiro</option>' +
                            '<option value="tech">Suporte Técnico</option>' +
                        '</select>' +
                    '</div>' +
                    '<span class="js-error">Selecione uma opção</span>' +
                '</li>' +
                '<li class="u-fw100">' +
                    '<label for="techSupport_msg">Mensagem *</label>' +
                    '<textarea id="techSupport_msg" placeholder="Mensagem" class="js-techSupport__msg' +
    ' js-fieldValidation__msg"></textarea>' +
                    '<span class="js-error">Mensagem deve ter mais que 20 caracteres.</span>' +
                '</li>' +
                '<li class="u-fw100 --btn u-dflex u-fdr u-jcfe">' +
                    '<button class="ga-chatbot__submitSuporte ga-chatbot__contaClique">Enviar</button>' +
                '</li>' +
            '</ul>' +
        '</form>' +
        '<span class="c-spacer"></span>' +
        '<a href="#options_2" class="js-chatbot-link c-btn --small --back" title="Voltar"><span>Voltar</span></a>' +
    '</div>';