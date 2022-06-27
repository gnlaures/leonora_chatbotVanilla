let cFormFeedbacks__linkBack = "";

if (chatbotLeonora.general.home === "") {
    cFormFeedbacks__linkBack = "#options_1"
} else {
    cFormFeedbacks__linkBack = chatbotLeonora.general.home
}

const cFormFeedbacks = '' +
    '<div class="c-formFeedback">' +
        '<div class="c-formFeedback__content u-dnone --success">' +
            '<i>' +
                '<img src="/arquivos/cChatbot_icon_success.png" alt="Formulário enviado com sucesso!">' +
            '</i>' +
            '<p>Formulário enviado com sucesso!</p>' +
            '<p><a href="'+cFormFeedbacks__linkBack+'" class="js-chatbot-link c-btn --small --back"' +
' title="Voltar"><span>Voltar</span></a></p>' +
        '</div>' +
        '<div class="c-formFeedback__content u-dnone --error">' +
            '<i>' +
                '<img src="/arquivos/cChatbot_icon_error.png" alt="Formulário não enviado, tente novamente mais tarde.">' +
            '</i>' +
            '<p>Formulário não enviado, tente novamente mais tarde.</p>' +
            '<p><a href="'+cFormFeedbacks__linkBack+'" class="js-chatbot-link c-btn --small --back" title="Voltar"><span>Voltar</span></a></p>' +
        '</div>' +
        '<div class="c-formFeedback__content u-dnone --load">' +
            '<i>' +
                '<img src="/arquivos/cChatbot_icon_load.png" alt="Enviando" class="css-animation-load">' +
            '</i>' +
            '<p>Enviando</p>' +
        '</div>' +
    '</div>';