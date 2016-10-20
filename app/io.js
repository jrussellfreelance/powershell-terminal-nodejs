var shell = require('node-powershell');
var fs = require('fs');
var scriptsDir = process.cwd() + "/public/scripts/"

module.exports = function(io) {
  io.on('connection', function(client) {
    console.log("Client connected");
    client.on('command', function(command) {
      var ps = new shell({executionPolicy: 'Bypass', debugMsg: true});
      ps.addCommand(command)
        .then(function() {
        	return ps.invoke();
        })
        .then(function(output) {
          io.emit('output', output);
          ps.dispose();
          res.end();
        })
        .catch(function(err) {
          io.emit('output', output);
          ps.dispose();
        });
    });

    client.on('script', function(script) {
      fs.writeFileSync((scriptsDir + script.title + ".ps1"), script.contents);
    });
  });
}
