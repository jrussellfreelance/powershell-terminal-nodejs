module.exports = function(app) {

  // Front end routes
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/editor', function(req, res) {
    res.render('editor');
  });
}
