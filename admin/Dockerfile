# Use a imagem oficial do Node.js
FROM node:latest

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do React para o contêiner
COPY . /usr/src/app

# Instale as dependências do Node.js
RUN npm install --force

# Construa a aplicação do React
RUN npm run build

# Exponha a porta que o React usa (geralmente 3000)
EXPOSE 3000

# Inicie o servidor de desenvolvimento do React
CMD ["npm", "start"]
