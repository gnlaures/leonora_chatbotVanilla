
# Leonora - "Chatbot" de atendimento.


## Configurações

| Key         | Key         | Conteúdo            | Descrição                                                                    |
| :---------- | :---------- | :------------------ | :--------------------------------------------------------------------------- |
| `general`   | `mode`      | ""                  | Quando vazio, o chatbot renderiza na forma padrão (oculto, fixo e no canto). |
| `general`   | `mode`      | "compact"           | Insere o chatbot na página no elemento "hero". |
| `general`   | `home`      | ""                  | Quando em branco, o componente "options_1" será o primeiro compoennte. |
| `general`   | `home`      | "component-id"      | Renderiza primeiro o componente com a ID selecionada. |
| `general`   | `hero`      | "", "tag/id/classe" | Quando vazio, o chatbot renderiza no final da tag body |
| `general`   | `extraClass`| string              | Adiciona classes adicionais no c-chatbot  |
| `general`   | `mask`| boolean              | Ativa ou não a máscara no fundo do chatbot  |
| `button`   | `active`| boolean              | Ativa ou não o CTA para abrir o chatbot  |
| `button`   | `extraClass`| string              | Classes adicionais que serão inseridas no elemento .c-chatbotCall.  |
| `button`   | `position`| "right" ou "left"              | Posicionamento do CTA.  |
| `button`   | `title`| string              | Título do CTA  |
| `button`   | `caption`| string              | Descrição do CTA  |
| `general`   | `icon_url`| string              | URL do ícone que aparece no CTA  |
| `header`   | `active`| boolean              | Ativa ou não o header  |
| `general`   | `brand_url`| string              | URL do logotipo  |
| `general`   | `brand_title`| string              | Título (alt) do logotipo  |
| `general`   | `description`| string              | Descrição no header  |
| `general`   | `btn_home_caption`| string              | Conteúdo do botão para voltar ao inicio  |
| `rdstation`   | `organization`| string              | ID da organização no RD Station  |



## Como instalar

Incorpore o CSS

```bash
  <link href="https://www.leonorab2b.com.br/arquivos/cChatBot.min.css" rel="stylesheet" type="text/css" />
```

Configure o Chatbot

```bash
  <script>
    const chatbotLeonora = {
        "general" : {
            "mode" : "",
            "home" : "",
            "hero" : "",
            "extraClass" : "",
            "mask" : true
        },
        "button" : {
            "active" : true,
            "extraClass" : "",
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
            "organization" : "" // Pegar na rdstation o ID da organização
        }
    }
</script>
```

Incorpore o JS

```bash
  <script src="https://www.leonorab2b.com.br/arquivos/cChatBot.min.js"></script>
```

