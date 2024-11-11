
# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Instruções de Execução

## Requisitos
- Node.js (>= versão utilizada no projeto)
- npm (gerenciador de pacotes)

### 1. Configuração do Backend

1. Acesse a pasta do backend:
   ```bash
   cd test-backend
   ```

2. Instale as dependências:
   ```bash
   npm i
   ```

3. Execute as migrações do banco de dados:
   ```bash
   npm run migration
   ```

4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

### 2. Configuração do Frontend

1. Acesse a pasta do frontend:
   ```bash
   cd ../test-frontend
   ```

2. Instale as dependências:
   ```bash
   npm i
   ```

3. Inicie o frontend em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

### Observação
Certifique-se de que o frontend está rodando na porta `3000`, pois, caso contrário, o sistema poderá enfrentar problemas de CORS ao se comunicar com o backend.

Espero que gostem 🧡

## Descrição:

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Requisitos do Frontend:

1. Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
2. Permitir a criação de um novo cliente através de um formulário.
3. Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
4. Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
5. Comunicar-se com a API para obter os dados dos clientes cadastrados.

## Requisitos do Backend:

Criar uma API que ofereça endpoints para:

1. Obter a listagem de clientes cadastrados.
2. Cadastrar um novo cliente com informações válidas.
3. Atualizar informações de cliente existente.
4. Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

## Requisitos de Qualidade de Código:

Escreva um código limpo, legível e bem organizado.
Adote boas práticas de desenvolvimento e arquitetura.

## Itens Desejáveis (opcional):

- Testes unitários
- Bibliotecas ou frameworks adicionais

## Telas:

- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)

## Instruções Finais:

Após concluir o desafio, crie um pull request neste repositório com duas pastas separadas: uma contendo o projeto frontend e outra com o projeto backend, para que possamos avaliar seu trabalho. Boa sorte!
