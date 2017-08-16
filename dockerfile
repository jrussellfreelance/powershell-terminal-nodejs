FROM jacfearsome/node

ADD . /remote-admin
WORKDIR /remote-admin
RUN npm install
EXPOSE 7878

CMD ["C:\node\node.exe", "server.js"]