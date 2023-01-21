# Boas vindas ao repositório do Trybe Futebol Clube!

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️
  
  Fiquei responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto, construi **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. O desenvolvimento **respeita as regras de negócio** providas no projeto e **a API deve é capaz de ser consumida por um front-end já provido pela Trybe**.

  Para adicionar uma partida foi necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. Possuindo um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

  O back-end implementa regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

#### O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - um container docker MySQL já configurado pela Trybe no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;
  - Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Um ambiente que eu realizei a maior parte das implementações exigidas.
 - Roda na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - A aplicação deve é inicializada a partir do arquivo `app/backend/src/server.ts`;
 - Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;
 - Todas as dependências extras (tal como `joi`, `boom`, `express-async-errors`...) devem ser listadas em `app/backend/packages.npm`.

3️⃣ **Front-end:**
  - O front já está concluído, não foi necessário realizar modificações no mesmo. A única exceção foi seu Dockerfile que precisou ser configurado.
  - Todos os testes a partir do requisito de login usam o `puppeteer` para simular uma pessoa acessando o site `http://localhost:3000/`;
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que eu construi.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
  
  # Orientações

## Antes de começar a desenvolver
Leia essa parte atentamente, pois aqui você encontrará informações importantes para preparar corretamente o setup do projeto.


#### 🔰 Iniciando o projeto:
 1. Clone o repositório `Usar link SSH`

- Entre na pasta do repositório que você acabou de clonar:
  * `cd pasta-do-repositório`

 2. Instale as dependências [**Caso existam**]
  * `npm install`

  #### 🕵️ Linter
  Este projeto já veio com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.
  
  
 # ⚠️ Configurações mínimas para execução do projeto
 
 Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.14.0 LTS`:
  - Para instalar o nvm, [acesse esse link](https://github.com/nvm-sh/nvm#installing-and-updating);
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16.14 --lts`
    - `nvm use 16.14`
    - `nvm alias default 16.14`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:
  * Acesse o [link da documentação oficial com passos para desinstalar](https://docs.docker.com/compose/install/#uninstallation) caso necessário.
  
  ## 🐳 ⚙️ Variáveis de ambiente
    **No diretório `app/backend/` renomeie o arquivo `.env.example` para `.env` e configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc)**. Isso vai permitir que você inicialize a aplicação fora do _container_ e ela se conecte com seu banco local caso deseje.
 > `./app/backend/.env.example`
  ```txt
  JWT_SECRET=jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost
  DB_PORT=3306
  ```

  **⚠️ Não defina variável de ambiente para o nome do banco, o mesmo deve se manter com o nome `TRYBE_FUTEBOL_CLUBE`. ⚠️**
  
  ## 🔐 Criptografia de senhas
  
  ⚠️ A biblioteca utilizada para criptografar a senha no banco de dados é a `bcryptjs` [bcryptjs npm](https://www.npmjs.com/package/bcryptjs) e que já veio instalada no projeto e não foi alterada ou substituída.⚠️
  
  
  # Comandos úteis
  
  - Quando um Workspace é inicializado na raiz do projeto, são apresentados alguns erros no Typescript. Para que o editor consiga sincronizar corretamente as configurações do `tsconfig.json`, é necessário iniciar um novo Workspace dentro do diretório `backend`.  Sempre que o VSCode apresentar algum erro de configuração do Typescript, certifique-se de que está usando o Workspace correto.
  - Ao rodar o comando `npm install` na pasta raiz do projeto você automaticamente estará **instalando suas aplicações (front e back)**;
  - Você pode **instalar suas aplicações (front e back)** rodando o comando `npm run install:apps` na pasta raiz do projeto;
  - Você pode rodar o avaliador **mostrando as operações que o navegador vai fazer no front-end** durante os testes E2E utilizando o comando `npm run test:browser`;
  - Você pode **debugar alguns erros do avaliador** (como por exemplo a validação do banco de dados, ou da compilação do TS), onde são *printadas* na tela algumas infos adicionais, utilizando o comando `npm run test:debug`;
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`, ou `compose:up:dev`, `compose:down:dev`;
  - Os comando de _compose_ anteriores estão configurados para executar o _docker-compose_ com o terminal desanexado (detached mode `-d`). Caso queira acompanhar os logs de um serviço em tempo real pelo terminal, basta executar `npm run logs [nome_do_servico]` onde _nome_do_servico_ é opcional e pode receber os serviços _backend_, _frontend_ ou _db_
  
  
