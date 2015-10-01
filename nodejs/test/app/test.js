var should = require('./runner/node_modules/should');

module.exports = function(box) {
  return [{
    assertion: function() {
      // errors thrown here will return the hints
      should.exist(box.variables.add);

    },
    hints: [{
      clue: 'Did you create the variable add?',
      solution: "var add = 'add var'"
    }]
  }]
}
