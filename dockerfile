FROM jacfearsome/node

ADD . /powershell-terminal-nodejs
WORKDIR /powershell-terminal-nodejs
RUN npm install
EXPOSE 7878

CMD ["C:\node\node.exe", "server.js"]