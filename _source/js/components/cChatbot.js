let compactClass = '';

if (chatbotLeonora.general.mode === 'compact') {
    compactClass = '--compact';
}

const cChatbot = '<div class="c-chatbot ' + chatbotLeonora.general.extraClass + ' ' + compactClass +'"></div>';