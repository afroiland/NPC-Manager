var verbose = true;

app.controller('CombatController', ['$http', '$location', function($http, $location) {
  // console.log("CombatController Running");
  const self = this;

  //self.combatant1 = {};
  self.combatant1 = {name:'Dude1', ac:3, currenthp:10, thac0: 16, weapon:'short sword'};
  //self.combatant2 = {};
  self.combatant2 = {name:'Dude2', ac:7, currenthp:10, thac0: 20, weapon:'long sword'};



  self.oneRound = function() {
    var fightOver;
    if (verbose) {console.log('new round');}
    determineInit();
    if (verbose) {console.log(self.combatant1.name + "'s init: ", self.combatant1.init);}
    if (verbose) {console.log(self.combatant2.name + "'s init: ", self.combatant2.init);}
    for (segment = 0; segment < 10; segment++) {
      // If initiative is tied
      if (self.combatant1.init == segment && self.combatant2.init ==segment) {
        //console.log('simultaneous');
        attack(self.combatant1, self.combatant2);
        attack(self.combatant2, self.combatant1);
        if (checkForIncap(self.combatant1)) {
          if (verbose) {console.log(self.combatant1.name + ' has fallen');}
          fightOver = true;
        }
        if (checkForIncap(self.combatant2)) {
          if (verbose) {console.log(self.combatant2.name + ' has fallen');}
          fightOver = true;
        }
      // Determine who goes first
    } else if (self.combatant1.init == segment) {
        //console.log('combatant1 go');
        attack(self.combatant1, self.combatant2);
        if (checkForIncap(self.combatant2)) {
          if (verbose) {console.log(self.combatant2.name + ' has fallen');}
          fightOver = true;
        }
      } else if (self.combatant2.init == segment) {
        //console.log('combatant2 go');
        attack(self.combatant2, self.combatant1);
        if (checkForIncap(self.combatant1)) {
          if (verbose) {console.log(self.combatant1.name + ' has fallen');}
          fightOver = true;
        }
      }
      if (fightOver) {
        return;
      }
    }
  };

  self.toTheFinish = function() {
    if (verbose) {console.log('fighting to the finish');}
    while (self.combatant1.currenthp > 0 && self.combatant2.currenthp > 0) {
      self.oneRound();
    }
  };

  function determineInit() {
    if (verbose) {console.log('determining init');}
    self.combatant1.init = Math.floor(Math.random() * 6) + 1;
    self.combatant2.init = Math.floor(Math.random() * 6) + 1;
  }

  function attack(attacker, defender) {
    //console.log(attacker.name + ' is attacking ' + defender.name);
    var dmg;
    switch (attacker.weapon) {
      case "short sword":
      dmg = Math.floor(Math.random() * 6) + 1;
      break;
      case "long sword":
      dmg = Math.floor(Math.random() * 8) + 1;
      break;
    }
    // Roll to hit
    if (Math.floor(Math.random() * 20) + 1 >= attacker.thac0 - defender.ac) {
      defender.currenthp -= dmg;
      if (verbose) {console.log(attacker.name + ' hits, inflicting ' + dmg + ' damage, putting ' + defender.name + ' to ' + defender.currenthp + 'hp.');}
    } else {
      if (verbose) {console.log(attacker.name + ' misses');}
    }
  }

  function checkForIncap(char) {
    //console.log('checking for incap');
    if (char.currenthp <= 0) {
      return true;
    }
  }

  function doABunch() {
    var dude1Wins = 0;
    var dude2Wins = 0;
    var mad = 0;
    for (var i = 0; i < 1000; i++) {
      self.toTheFinish();
      if (self.combatant1.currenthp > 0 && self.combatant2.currenthp <= 0) {
        dude1Wins++;
      } else if (self.combatant2.currenthp > 0 && self.combatant1.currenthp <= 0) {
        dude2Wins++;
      } else {
        mad++;
      }
      self.combatant1.currenthp = 20;
      self.combatant2.currenthp = 10;
    }
    console.log('dude1Wins: ', dude1Wins);
    console.log('dude2Wins: ', dude2Wins);
    console.log('mad: ', mad);
  }

  //doABunch();


}]);
