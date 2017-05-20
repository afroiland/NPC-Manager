app.controller('CombatController', ['$http', '$location', function($http, $location) {
  console.log("CombatController Running");
  const self = this;

  self.combatant1 = {};
  self.combatant2 = {};
  var segment;

  self.fight = function() {
    var init = determineInit(self.combatant1, self.combatant2);
    if (init = ) {

    }

    // Advance segments until someone's turn to act

    // Choose action

    // Results

    // continue w/ segments


  }

  function determineInit(side1, side2) {
    var side1Roll = Math.floor(Math.random() * 6) + 1;
    var side2Roll = Math.floor(Math.random() * 6) + 1;
    var result;
    if (side1Roll > side2Roll) {
      result = ;
    } else if (side1Roll < side2Roll) {
      result = ;
    } else {
      result = ;
    }
    return result;
  }

  function checkForIncap(char) {
    if (char.hp <= 0) {
      return true;
    }
  }


}]);
