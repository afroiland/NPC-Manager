app.controller('CombatController', ['$http', '$location', function($http, $location) {
  // console.log("CombatController Running");
  const self = this;

  //self.combatant1 = {};
  self.combatant1 = {name:'Dude1', ac:7, currenthp:10, thac0: 20, dmg:'d6'};
  //self.combatant2 = {};
  self.combatant2 = {name:'Dude2', ac:7, currenthp:10, thac0: 20, dmg:'d6'};
  var segment = 0;

  self.oneRound = function() {
    var fightOver;
    console.log('fighting a bit');
    determineInit();
    console.log('self.combatant1.init: ', self.combatant1.init);
    console.log('self.combatant2.init: ', self.combatant2.init);
    for (i = segment; i < 10; i++) {
      if (self.combatant1.init == i && self.combatant2.init ==i) {
        console.log('simultaneous');
        attack(self.combatant1, self.combatant2);
        attack(self.combatant2, self.combatant1);
        if (checkForIncap(self.combatant1)) {
          console.log(self.combatant1.name + ' has fallen');
          fightOver = true;
        }
        if (checkForIncap(self.combatant2)) {
          console.log(self.combatant2.name + ' has fallen');
          fightOver = true;
        }
      } else if (self.combatant1.init == i) {
        console.log('combatant1 go');
        attack(self.combatant1, self.combatant2);
        if (checkForIncap(self.combatant2)) {
          console.log(self.combatant2.name + ' has fallen');
          fightOver = true;
        }
      } else if (self.combatant2.init == i) {
        console.log('combatant2 go');
        attack(self.combatant2, self.combatant1);
        if (checkForIncap(self.combatant1)) {
          console.log(self.combatant1.name + ' has fallen');
          fightOver = true;
        }
      }
      if (fightOver) {
        return;
      }
    }
  };

  self.toTheFinish = function() {
    console.log('fighting to the finish');
    while (self.combatant1.currenthp > 0 && self.combatant2.currenthp > 0) {
      //console.log('uh, going?');
      self.oneRound();
    }
  };

  function determineInit() {
    console.log('determining init');
    self.combatant1.init = Math.floor(Math.random() * 6) + 1;
    self.combatant2.init = Math.floor(Math.random() * 6) + 1;
  }

  function attack(attacker, defender) {
    //console.log(attacker.name + ' is attacking ' + defender.name);
    if (Math.floor(Math.random() * 20) + 1 >= attacker.thac0 - defender.ac) {
      var dmg = Math.floor(Math.random() * 6) + 1;
      defender.currenthp -= dmg;
      console.log(attacker.name + ' hits, inflicting ' + dmg + ' damage. ' + defender.name + ' is at ' + defender.currenthp + 'hp.');
    } else {
      console.log('Miss');
    }
  }

  function checkForIncap(char) {
    console.log('checking for incap');
    if (char.currenthp <= 0) {
      return true;
    }
  }


}]);
