FROM node

# Diretório aonde as infos estarão contidas
WORKDIR /usr/app

COPY package.json ./

RUN npm install

# copiar tudo (.) para a pasta raiz (.)
COPY . .

EXPOSE 3333

# para rodar o script: npm run dev
CMD ["npm", "run", "dev"]

# (terminal): docker build -t XXX --file ./Dockefile