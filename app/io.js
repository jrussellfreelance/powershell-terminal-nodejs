var shell = require('node-powershell');

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
  });
}
