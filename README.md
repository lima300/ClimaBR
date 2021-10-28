# ClimaBR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

Veja um pouco do funcionamento da aplicação : [![Projeto Final Modelagem e Implementação de Software](https://res.cloudinary.com/marcomontalbano/image/upload/v1635462673/video_to_markdown/images/youtube--FJkQuVOSa1w-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=FJkQuVOSa1w "Projeto Final Modelagem e Implementação de Software")

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: "<your-api-key>",
  api_url: "https://api.openweathermap.org/data/2.5/onecall",
  api_icon_url: "http://openweathermap.org/img/wn",
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Enjoy!
