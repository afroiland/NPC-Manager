app.controller('CombatController', ['$http', '$location', function($http, $location) {
  // console.log("CombatController Running");
  const self = this;

  //self.combatant1 = {};
  self.combatant1 = {ac:7, currenthp:10, thac0: 10}
  //self.combatant2 = {};
  self.combatant2 = {ac:7, currenthp:10, thac0: 10}
  var segment = 0;

  self.oneRound = function() {
    console.log('fighting a bit');
    determineInit();
    console.log('self.combatant1.init: ', self.combatant1.init);
    console.log('self.combatant2.init: ', self.combatant2.init);
    for (i = segment; i < 10; i++) {
      if (self.combatant1.init == self.combatant2.init) {
        console.log('tied');
      } else if (self.combatant1.init == i) {
        console.log('combatant1 go');
      } else if (self.combatant2.init == i) {
        console.log('combatant2 go');
      }
    }

    // Advance segments until someone's turn to act

    // Choose action

    // Results

    // continue w/ segments


  }

  function determineInit() {
    console.log('determining init');
    self.combatant1.init = Math.floor(Math.random() * 6) + 1;
    self.combatant2.init = Math.floor(Math.random() * 6) + 1;
  }

  function checkForIncap(char) {
    if (char.hp <= 0) {
      return true;
    }
  }


}]);
