app.controller('CombatController', ['$http', '$location', function($http, $location) {
  // console.log("CombatController Running");
  const self = this;

  //self.combatant1 = {};
  self.combatant1 = {name:'Dude', ac:7, currenthp:10, thac0: 20, dmg:'d6'};
  //self.combatant2 = {};
  self.combatant2 = {name:'Person', ac:7, currenthp:10, thac0: 20, dmg:'d6'};
  var segment = 0;

  self.oneRound = function() {
    var fightOver;
    console.log('fighting a bit');
    determineInit();
    console.log('self.combatant1.init: ', self.combatant1.init);
    console.log('self.combatant2.init: ', self.combatant2.init);
    for (i = segment; i < 10; i++) {
      if (self.combatant1.init == self.combatant2.init) {
        console.log('simultaneous');
        if (Math.floor(Math.random() * 20) + 1 >= self.combatant1.thac0 - self.combatant2.ac) {
          self.combatant2.currenthp -= //damage;
        }
        if (Math.floor(Math.random() * 20) + 1 >= self.combatant2.thac0 - self.combatant1.ac) {
          self.combatant1.currenthp -= //damage;
        }
        if (checkForIncap(self.combatant1.currenthp)) {
          console.log(self.combatant1.name + 'has fallen');
          fightOver = true;
        }
        if (checkForIncap(self.combatant2.currenthp)) {
          console.log(self.combatant2.name + 'has fallen');
          fightOver = true;
        }
      } else if (self.combatant1.init == i) {
        console.log('combatant1 go');
        attack(self.combatant1, self.combatant2);
      } else if (self.combatant2.init == i) {
        console.log('combatant2 go');
        attack(self.combatant2, self.combatant1);
      }
      if (fightOver) {
        return;
      }
    }
  };

  self.toTheFinish = function() {
    console.log('fighting to the finish');
  }

  function determineInit() {
    console.log('determining init');
    self.combatant1.init = Math.floor(Math.random() * 6) + 1;
    self.combatant2.init = Math.floor(Math.random() * 6) + 1;
  }

  function attack(attacker, defender) {
    console.log(attacker.name + ' is attacking ' + defender.name);
    if (Math.floor(Math.random() * 20) + 1 >= attacker.thac0 - defender.ac) {
      defender.currenthp -= //damage;
    }
  }

  function checkForIncap(char) {
    if (char.hp <= 0) {
      return true;
    }
  }


}]);
