function insertComponent(where, component) {
    document.querySelector(where).insertAdjacentHTML('beforeend', component);
}
function createChatbotContent(where, title, id, content, extraClass) {
    let thisComponent = '<div class="c-chatbot__content '+ extraClass+'" id="' + id + '"><div' +
        ' class="c-chatbot__content__title"><h3>' + title + '</h3></div><div' +
        ' class="c-chatbot__content__article">' + content + '</div></div>';
    insertComponent(where, thisComponent)
}

// create elements
if ((chatbotLeonora.button.active) && (chatbotLeonora.general.mode !== "compact")) {insertComponent('body', cChatbotCall);}
insertComponent(chatbotLeonora.general.hero, cChatbot);
if (chatbotLeonora.header.active) {insertComponent('.c-chatbot', cChatbotHeader);}
insertComponent('.c-chatbot', cChatbotHero);
if (chatbotLeonora.general.mask) {insertComponent('body', cChatbotMask);}

insertComponent('.c-chatbot__hero', cFormFeedbacks);

createChatbotContent('.c-chatbot__hero', '', 'options_1', cListOptionsPrimary, '--noTitle');
createChatbotContent('.c-chatbot__hero', 'Valor Mínimo de Pedidos', 'valor-pedido-minimo', cForm__checkMinPrice);
createChatbotContent('.c-chatbot__hero', 'Quero Comprar Agora', 'quero-comprar-agora', cForm__comprarAgora);
createChatbotContent('.c-chatbot__hero', 'Contato de Representantes', 'contato-representantes', cForm__sellerContacts);
createChatbotContent('.c-chatbot__hero', 'Outras Dúvidas e Suporte Técnico', 'suporte-tecnico', cForm__techSupport);

createChatbotContent('.c-chatbot__hero', '', 'options_2', cListOptionsSecondary, '--noTitle');

createChatbotContent('.c-chatbot__hero', 'Cadastro & Login', 'cadastro-e-login', cSignSignup);
createChatbotContent('.c-chatbot__hero', '2º Via Boleto', 'segunda-via-boleto', cDuplicateTicket);

// active home element
if (chatbotLeonora.general.home === "") {
    document.getElementById('options_1').classList.add('is-active');
} else {
    document.getElementById(chatbotLeonora.general.home).classList.add('is-active');
}





