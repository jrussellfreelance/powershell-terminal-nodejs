var ctrl = angular.module('controllers', ['directives']);

ctrl.controller('indexController', function($scope) {
  var langTools = ace.require("ace/ext/language_tools")
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/pastel_on_dark");
  editor.getSession().setMode("ace/mode/powershell");
  editor.setOptions({enableBasicAutocompletion: true});
  var customCompleter = {
    getCompletions: function (editor, session, pos, prefix, callback) {
      callback(null, commands.map(function (key) {
        return { name: key, value: key, score: "1", meta: key }
      }));
    }
  };
  langTools.addCompleter(customCompleter);

  var socket = io();

  $scope.sendCommand = function() {
    var command = editor.getValue();
    socket.emit('command', command)
  };

  socket.on('output', function(output) {
    $('#output').text(output);
  });
});
