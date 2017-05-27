app.controller('CombatController', ['$http', '$location', function($http, $location) {
  // console.log("CombatController Running");
  const self = this;

  self.combatant1 = {};
  self.combatant2 = {};
  var segment = 0;

  self.oneRound = function() {
    determineInit();
    if (self.combatant1.init == self.combatant2.init) {
      console.log('tied');
    } else {
      console.log('not tied');
    }

    // Advance segments until someone's turn to act

    // Choose action

    // Results

    // continue w/ segments


  }

  function determineInit() {
    self.combatant1.init = Math.floor(Math.random() * 6) + 1;
    self.combatant2.init = Math.floor(Math.random() * 6) + 1;
  }

  function checkForIncap(char) {
    if (char.hp <= 0) {
      return true;
    }
  }


}]);
