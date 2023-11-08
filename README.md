# **Lar Canino**

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## **Índice:**

1. [Sobre o projeto](#sobre-o-projeto-lar-canino);
2. [Principais desafios](#principais-desafios);
3. [O que mais gostei](#o-que-mais-gostei);
5. [Tecnologias/linguagens utilizadas](#tecnologiaslinguagens-utilizadas);
6. [Instruções](#instruções);
7. [Imagens do projeto](#imagens-do-projeto);
8. [Status](#status);
9. [Contato](#contato);

## **Sobre o projeto Lar Canino**

Decidi tentar reproduzir um design que encontrei no Pinterest/Dribbble de um site fictício de um abrigo para animais. <br/>
Preferi utilizar uma temática voltada para cães, porque sou uma dog lover. <br/>
Meu objetivo era reproduzir fielmente (na medida do possível) o design, traduzindo-o para o português e adaptando conforme minhas preferências.<br/>
As devidas atribuições se encontram no link Atribuições ao final da página.

<img src="./public/demonstracao-lar-canino.gif" alt="Demonstração Lar Canino" width="900px" align="center"/>

## **Principais desafios**

- Transformar o design do Dribbble em algo com o que eu pudesse trabalhar no Figma. Tive que recriar as seções, pelo menos da página principal, do zero, fazendo as adaptações em que pensava na hora.
- Criar um arquivo JSON com o qual eu pudesse trabalhar para renderizar as imagens e informações dos cãezinhos (a ideia inicial era usar uma API desenvolvida por mim, mas decidi usar um JSON neste projeto apenas para começar a testar).
- Ajustar a responsividade, visto que só a versão desktop estava disponível.
- Criar a página "Agende uma visita" do zero. Apesar de ser um formulário simples, ainda assim, fiquei um tempo pensando na melhor forma de fazer. Relacionado a isso também, aprender a usar o React Hook Form para lidar com o formulário.
- Criar o modal padrão e o carrossel do absoluto zero.
- Implementar um estado de loading com skeletons para os cards dos cães.

## **O que mais gostei**

- Todas as partes dos desafios que enfrentei, bem como a parte de criar os textos fictícios, tanto para representar o abrigo quanto para os cãezinhos. Usei do auxílio do ChatGPT e do Chat Bing nessa parte.
- Acredito que não segui uma arquitetura ideal para a estrutura dos componentes, mas ainda estou estudando para tornar essa parte mais organizada e manutenível.

## **Demais implementações**
- Scrollbar personalizada;
- Favicon personalizado;

## **Tecnologias/linguagens utilizadas:**

<div style="display: inline_block" align="center"><br />
    <img src="https://img.shields.io/badge/Next-8A2BE2?style=for-the-badge&logo=nextdotjs&logoColor=white" height="35px" alt="Next.Js" align="center" />
    <img src="https://img.shields.io/badge/React-A416E6?style=for-the-badge&logo=react&logoColor=white" height="35px" alt="React.Js" align="center" />
    <img src="https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="35px" alt="Node.Js" align="center" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge" height="35px" alt="Sass" align="center" />
</div><br />

#

## **Instruções**

1. Alternativa 1:
    * Acesse [aqui](https://lar-canino.vercel.app/);

2. Alternativa 2:
    * Clone o repositório clicando em "Code" e copie a URL em HTTPS.
    * Na pasta onde deseja que o projeto fique, segure a tecla SHIFT e clique com o botão direito, e selecione "Git bash here" ou alguma outra opção que seja de sua preferência. Certifique-se de ter o Git instalado se for a primeira.
    * Dê o comando `git clone <URL-copiada>` e pressione Enter. Isso copiará o projeto.
    * Agora você pode abrir o projeto tanto pelo Git (fazendo o percurso `cd <nome-do-projeto>)` quanto pelo seu Editor de Código (IDE) preferido.
    * Instale as dependências necessárias do projeto com o comando `npm install` ou `npm i`, pelo terminal ou diretamente pela IDE.
    * Execute o comando `npm run dev` no terminal e copie o link que aparece no terminal no seu navegador de preferência, ou segure CTRL e clique com o botão esquerdo do mouse no link, isso abrirá o projeto diretamente no último navegador utilizado.


## **Imagens do projeto**

<div align="center">
    <img src="./public/pagina-inicial-desktop.png" alt="Página inicial - desktop" width="900px"/>
    <img src="./public/modal-desktop.png" alt="Modal com informações de um cãozinho - desktop" width="900px"/>
    <img src="./public/pagina-agendamento-desktop.png" alt="Página para agendar uma visita - desktop" width="900px"/>
    <img src="./public/mensagem-agendamento-desktop.png" alt="Página com mensagem de agendamento - desktop" width="900px"/>
    <img src="./public/pagina-inicial-tablet.png" alt="Página inicial - tablet" width="200px"/>
    <img src="./public/modal-tablet.png" alt="Modal com informações de um cãozinho - tablet" width="200px"/>
    <img src="./public/pagina-agendamento-tablet.png" alt="Página para agendar uma visita - tablet" width="200px"/><br />
    <img src="./public/mensagem-agendamento-tablet.png" alt="Página com mensagem de agendamento - tablet" width="200px"/><br />
    <img src="./public/pagina-inicial-mobile.png" alt="Página inicial - mobile" width="130px"/>
    <img src="./public/modal-mobile.png" alt="Modal com informações de um cãozinho - mobile" width="130px"/>
    <img src="./public/pagina-agendamento-mobile.png" alt="Página para agendar uma visita - mobile" width="130px"/>
    <img src="./public/mensagem-agendamento-mobile.png" alt="Página com mensagem de agendamento - mobile" width="130px"/><br />
</div>

## **Status**
- [x] Funcional;
- [x] Acredito que está responsivo;


## **Contato**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](link)