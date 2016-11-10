module.exports = function(app) {

  // Front end routes
  app.get('/powershell', function(req, res) {
    res.render('index');
  });
}
