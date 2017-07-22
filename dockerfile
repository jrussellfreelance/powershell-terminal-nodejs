FROM node:6
RUN mkdir -p /usr/src/powershell-terminal-nodejs
WORKDIR /usr/src/powershell-terminal-nodejs
COPY package.json /usr/src/powershell-terminal-nodejs/
RUN npm install
COPY . /usr/src/powershell-terminal-nodejs
EXPOSE 7878
CMD [ "node", "server.js" ]
