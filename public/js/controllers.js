var ctrl = angular.module('controllers', ['directives']);

ctrl.controller('navController', function($scope) {

});

ctrl.controller('indexController', function($scope) {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/pastel_on_dark");
  editor.getSession().setMode("ace/mode/powershell");
  var socket = io();

  $scope.sendCommand = function() {
    var command = editor.getValue();
    socket.emit('command', command)
  };

  $scope.saveScript = function() {
    var title = $scope.title
    var contents = editor.getValue();
    var script = {'title': title, 'contents': contents}
    socket.emit('script', script);
  }

  socket.on('output', function(output) {
    $('#output').text(output);
  });

  $('#commands').autocomplete({
    source: commands
  });
});
