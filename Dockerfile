# Use a imagem base do Node.js
FROM node:22

# Instala dependências do PostgreSQL para teste de conexão
RUN apt-get update && apt-get install -y postgresql-client

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar dependências do projeto
RUN npm ci

# Copia arquivos do projeto para o diretório de trabalho
COPY . .

# Verifique se o módulo crypto está disponível
RUN node -e "require('crypto').randomUUID(); console.log('crypto module is available');"

# Compile o projeto TypeScript
RUN npm run build

# Exponha a porta que o aplicativo irá usar
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["node", "dist/main"]