# Use a imagem base do Node.js
FROM node:22

# Instala dependências do PostgreSQL para teste de conexão
RUN apt-get update && apt-get install -y postgresql-client

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia apenas arquivos de dependências (evita rebaixar pacotes ao alterar código)
COPY package*.json ./

# Instala dependências do projeto
RUN npm ci

# Exponha a porta que o aplicativo irá usar
EXPOSE 3000

# Comando padrão para rodar a aplicação no modo desenvolvimento
CMD ["npm", "run", "start:dev"]