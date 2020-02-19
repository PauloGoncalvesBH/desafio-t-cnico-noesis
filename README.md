# Desafio técnico - Noesis

Desafio técnico para vaga de QA da Noesis

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/desafio-tecnico-noesis.git && cd desafio-tecnico-noesis
```

**2** - Instale as dependências do projeto:

```sh
npm ci
```

O comando [npm ci](https://docs.npmjs.com/cli/ci.html) instala as dependências do projeto de forma limpa. Uma diferença importante para o [npm install](https://docs.npmjs.com/cli/install) é que remove o diretório _node_modules_ e instala as versões listadas no  [package.json](./package.json) e [package-lock.json](./package-lock.json).

### Executando os testes

#### Unit - Desafio 1

Para executar o teste unitário, execute:

```
npm run test:unit
```

#### API - Desafio 2

Para executar os testes de API, execute:

```
npm run test:api
```

#### E2E - Desafio 3

Para executar os testes E2E no **Chrome**, execute:

```sh
npm run test:e2e:chrome
```

Para executar no **Firefox**, execute:

```sh
npm run test:e2e:firefox
```

Para executar em ambos os navegadores, execute:
```
npm test:e2e
```

> No início da execução o driver do navegador a ser executado é atualizado utilizando o comando `webdriver-manager update`. Verifique a seção _scripts_ no [package.json](package.json).

#### Todos os testes

Para executar todos os testes, execute:

```sh
npm test
```