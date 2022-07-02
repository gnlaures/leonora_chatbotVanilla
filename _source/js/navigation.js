// controls & elements
const jsToggleChatbot = document.querySelectorAll('.js-chatbot-toggle');
const jsOpenChatbot = document.querySelectorAll('.js-chatbot-open');
const jsCloseChatbot = document.querySelectorAll('.js-chatbot-close');
const jsLinkChatbot = document.querySelectorAll('.js-chatbot-link');
const chatbotMask = document.querySelectorAll('.c-chatbotMask');
const chatbot = document.querySelector('.c-chatbot');

// functions
function closeChatbot() {
    chatbot.classList.remove('is-active');
    if (chatbotLeonora.general.mask) {chatbotMask.forEach((mask) => {mask.classList.add('u-dnone')})}
}
function openChatbot() {
    chatbot.classList.add('is-active');
    if (chatbotLeonora.general.mask) {chatbotMask.forEach((mask) => {mask.classList.remove('u-dnone')})}
}
function toggleChatbot() {
    if (chatbot.classList.contains('is-active')) {
        closeChatbot();
    } else {
        openChatbot();
    }
}

// open/close
jsToggleChatbot.forEach((item) => {
    item.addEventListener('click', toggleChatbot);
})
jsCloseChatbot.forEach((item) => {
    item.addEventListener('click', closeChatbot);
})
jsOpenChatbot.forEach((item) => {
    item.addEventListener('click', openChatbot);
})

//inner navigation
jsLinkChatbot.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // hide feedbacks
        document.querySelectorAll('.c-formFeedback__content').forEach((feedback) => {
            //console.log(feedback)
            feedback.classList.add('u-dnone');
        })

        // close all
        document.querySelectorAll('.c-chatbot__content').forEach((content) => {
           content.classList.remove('is-active');
           content.classList.remove('u-dnone');
        });

        // open
        let thisHref = item.getAttribute("href");
        document.querySelector(thisHref).classList.add('is-active');

        // headers
        if (document.querySelector('#options_1').classList.contains('is-active')) {
            document.querySelector('.c-chatbot__header').classList.remove('--inner');
        } else {
            document.querySelector('.c-chatbot__header').classList.add('--inner');
        }
    });
})

// hash navigation
if (cForm__hiddenFields.atendimento_leonora !== "") {
    let contentID = cForm__hiddenFields.atendimento_leonora;
    // console.log(contentID)
    if (document.getElementById(contentID)) {
        document.querySelectorAll('.c-chatbot__content').forEach((page) => {
            // active page
            page.classList.remove('is-active')
            if (page.getAttribute('id') === contentID) {
                page.classList.add('is-active')
            }
            //
            openChatbot();
        })
    } else {
        // console.log('n existe')
    }
} else {
    // console.log('normal')
}

// ?atendimento_leonora=quero-comprar-agora