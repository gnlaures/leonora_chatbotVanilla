function getURLparams(paramToSearch) {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(paramToSearch)
    return param;
}

const cForm__hiddenFields = {
    "url" : window.location.href,
    "utm_source" : getURLparams('utm_source'),
    "utm_medium" : getURLparams('utm_medium'),
    "utm_campaign" : getURLparams('utm_campaign'),
    "utm_term" : getURLparams('utm_term'),
    "utm_content" : getURLparams('utm_content'),
    "atendimento_leonora" : getURLparams('atendimento_leonora'),
}