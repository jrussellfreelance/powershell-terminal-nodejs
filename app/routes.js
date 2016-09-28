var shell = require('node-powershell');

module.exports = function(app) {

  var commandOutput = "";

  // PowerShell routes
  app.post('/send-command', function(req, res) {
  	var command = req.body.command;
    var ps = new shell({executionPolicy: 'Bypass', debugMsg: true});
    ps.addCommand(command)
      .then(function() {
      	return ps.invoke();
      })
      .then(function(output) {
      	console.log(output);
        commandOutput = output;
        ps.dispose();
        res.end();
      })
      .catch(function(err) {
      	console.log(err);
        ps.dispose();
      });
  });
  app.get('/get-output', function(req, res) {
  	res.send(commandOutput);
  });


  // Front end routes
  app.get('/', function(req, res) {
    res.render('index');
  })
}
