/* Helmet
instalar pelo comando npm helmet

O helmet é um pacote de middleware para Node.js que ajuda a proteger aplicativos Express de vulnerabilidades conhecidas da web

O pacote helmet é composto por diversos middlewares que adicionam diferentes camadas de segurança. Alguns dos middlewares mais comuns do pacote helmet são:

helmet.contentSecurityPolicy(): define políticas de segurança para o conteúdo do aplicativo, limitando quais recursos podem ser carregados pelo navegador.
helmet.frameguard(): impede que o aplicativo seja incorporado em um iframe sem autorização.
helmet.hidePoweredBy(): remove informações sobre a tecnologia utilizada pelo aplicativo nos cabeçalhos HTTP.
helmet.hsts(): habilita o header Strict-Transport-Security para garantir que as solicitações sejam feitas apenas por HTTPS.
helmet.noCache(): define cabeçalhos para evitar o armazenamento em cache do conteúdo.
helmet.xssFilter(): habilita o filtro de XSS (Cross-Site Scripting) do navegador para proteger o aplicativo contra ataques desse tipo.
helmet.referrerPolicy(): controla a política de referenciador para limitar a divulgação de informações do referenciador.


*/

/* CSRF
instalar pelo comando npm csurf

*/