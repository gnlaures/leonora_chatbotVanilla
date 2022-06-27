let urlHome = 'options_1';

if (chatbotLeonora.general.home !== "") {
    urlHome = chatbotLeonora.general.home;
}

const cChatbotCall = '<a class="c-chatbotCall js-chatbot-toggle js-chatbot-link ' + chatbotLeonora.button.extraClass + '" href="#'+urlHome+'">' +
    '<i><img src="/arquivos/cChatbot_icon_chat.png" alt="'+chatbotLeonora.button.caption+'"></i>' +
    '<div><span><strong>'+chatbotLeonora.button.title+'</strong></span><span>'+chatbotLeonora.button.caption+'</span></div>' +
    '</a>';