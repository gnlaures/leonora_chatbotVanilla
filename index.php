<!--
- Button
- - Caption 1
- - Caption 2
- - Icon
- - Position
- - ExtraClass

- FAQ
- - Position - left or right

- JS
- - Keys
- - MakeButton
- -
-->

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Chatbot Leonora</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
        <link href="dist/cChatBot.min.css" type="text/css" rel="stylesheet" />
    </head>

    <body>
        <ul class="c-docs u-dnone">
            <li>
                <p><strong>general.mode: </strong>"", "compact"</p>
                <p>Se deixar em branco o chatbot ficará fixo</p>
            </li>
            <li>
                <p><strong>general.home: </strong>"", "component-id"</p>
                <p>Se deixar em branco o componente "#options_1" será renderizado.</p>
            </li>
            <li>
                <p><strong>general.hero: </strong>"", "tag/id/classe"</p>
            </li>
            <li>
                <p><strong>general.extraClass: </strong>"", "--noTitles"</p>
                <p>--noTitles retira o título de todas os componentes</p>
            </li>
            <li>
                <p><strong>general.home: </strong>"", "component-id"</p>
                <p>Classes adicionais que serão inseridas no elemento <strong>.c-chatbot</strong>.</p>
            </li>
            <li>
                <p><strong>button.active: </strong>boolean</p>
            </li>
            <li>
                <p><strong>button.extraClass: </strong>string</p>
                <p>Classes adicionais que serão inseridas no elemento <strong>.c-chatbotCall</strong>.</p>
            </li>
            <li>
                <p><strong>button.position: </strong>"right", "left"</p>
                <p>Botão ficará fixo na direita ou na esquerda.</p>
            </li>
        </ul>

        <script>
            const chatbotLeonora = {
                "general" : {
                    "mode" : "compact",
                    "home" : "",
                    "hero" : "body",
                    "extraClass" : "",
                    "mask" : true
                },
                "button" : {
                    "active" : true,
                    "extraClass" : "ga-chatbot__open ga-chatbot__contaClique",
                    "title" : "Precisa de ajuda?",
                    "caption" : "Iniciar Atendimento",
                    "icon_url" : "https://www.leonorab2b.com.br/arquivos/cChatbot_icon_chat.png?v=637891860858500000",
                    "position" : "right"
                },
                "header" : {
                    "active" : true,
                    "brand_url" : "https://www.leonorab2b.com.br/arquivos/leonora_brand_b2b.png?v=637753474687370000",
                    "brand_title" : "Leonora B2B",
                    "description" : "Olá, Bem vindo(a) ao suporte online da Leonora B2B, selecione abaixo o assunto que você precisa de ajuda.",
                    "btn_home_caption" : "Início"
                },
                "rdstation" : {
                    "organization" : "62b2275fdfe362000cd347fc"
                }
            }
        </script>
        <script src="dist/cChatBot.min.js"></script>
    </body>
</html>