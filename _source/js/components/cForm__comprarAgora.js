const cForm__comprarAgora = '<div class="c-formClientQualification">' +
    '<form class="c-form js-clientQualificationForm">' +
        '<ul>' +
            '<li class="u-fw60">' +
                '<label for="clientQualification_nome">Nome completo' + ' *</label>' +
                '<input type="text" id="clientQualification_nome" class="js-fieldValidation__fullName' +
    ' js-fieldRequired">' +
                '<span class="js-error">Preencha seu nome completo corretamente.</span>' +
            '</li>' +
            '<li class="u-fw40">' +
                '<label for="clientQualification_cnpj">CNPJ *</label>' +
                '<input type="text" id="clientQualification_cnpj" class="js-fieldMask__cnpj js-fieldValidation__cnpj' +
    ' js-fieldRequired">' +
                '<span class="js-error">CNPJ Inválido</span>' +
            '</li>' +
            '<li class="u-fw60">' +
                '<label for="clientQualification_email">E-mail? *</label>' +
                '<input type="text" id="clientQualification_email" class="js-fieldValidation__email">' +
                '<span class="js-error">Seu e-mail deve possuir @ e um domínio válido.</span>' +
            '</li>' +
            '<li class="u-fw40">' +
                '<label for="clientQualification_tel">Telefone / Whatsapp*</label>' +
                '<input type="text" id="clientQualification_tel" class="js-fieldMask__phone js-fieldValidation__phone">' +
                '<span class="js-error">Telefone inválido</span>' +
            '</li>' +
            '<li class="u-fw100 --spacer"><span class="c-spacer"></span></li>' +
            '<li class="u-fw35">' +
                '<label for="clientQualification_urgency">Qual a urgência para adquirir os nossos produtos? *</label>' +
                '<div class="c-form__select">' +
                    '<select id="clientQualification_urgency" class="js-fieldValidation__select">' +
                        '<option value="Alta">Alta</option>' +
                        '<option value="Média">Média</option>' +
                        '<option value="Baixa">Baixa</option>' +
                    '</select>' +
                '</div>' +
                '<span class="js-error">Selecione uma opção</span>' +
            '</li>' +
            '<li class="u-fw35">' +
                '<label for="clientQualification_averagePrice">Qual o valor médio da compra? *</label>' +
                '<div class="c-form__select">' +
                    '<select id="clientQualification_averagePrice" class="js-fieldValidation__select">' +
                        '<option value="Selecione">Selecione</option>' +
                        '<option value="Até R$ 2.000,00">Até R$ 2.000,00</option>' +
                        '<option value="R$ 2.000,00 até R$ 4.000,00">R$ 2.000,00 até R$ 4.000,00</option>' +
                        '<option value="R$ 4.000,00 até R$ 8.000,00">R$ 4.000,00 até R$ 8.000,00</option>' +
                        '<option value="R$ 8.000,00 até R$ 12.000,00">R$ 8.000,00 até R$ 12.000,00</option>' +
                        '<option value="Mais que R$ 12.000,00">Mais que R$ 12.000,00</option>' +
                    '</select>' +
                '</div>' +
                '<span class="js-error">Selecione uma opção</span>' +
            '</li>' +
            '<li class="u-fw30">' +
                '<label for="clientQualification_paymentMethod">Qual a forma de pagamento? *</label>' +
                '<div class="c-form__select">' +
                    '<select id="clientQualification_paymentMethod" class="js-fieldValidation__select">' +
                        '<option value="Selecione">Selecione</option>' +
                        '<option value="Boleto à vista">Boleto à vista</option>' +
                        '<option value="Boleto à prazo">Boleto à prazo</option>' +
                        '<option value="Cartão de crédito">Cartão de crédito</option>' +
                        '<option value="PIX">PIX</option>' +
                    '</select>' +
                '</div>' +
                '<span class="js-error">Selecione uma opção</span>' +
            '</li>' +
            '<li class="u-fw100 --spacer"><span class="c-spacer"></span></li>' +
            '<li class="u-fw100">' +
                '<label for="techSupport_msg">Mensagem Adicional (Opcional)</label>' +
                '<textarea id="clientQualification_msg" placeholder="Mensagem" class="js-fieldValidation__msg"></textarea>' +
            '</li>'+
            '<li class="u-fw100 --btn u-dflex u-fdr u-jcfe">' +
                '<button class="ga-chatbot__submitComprarAgora ga-chatbot__contaClique">Enviar</button>' +
            '</li>' +
        '</ul>' +
    '</form>' +
'</div>';