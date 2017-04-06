app.controller('RandomController', ['$http', '$location', function($http, $location) {
  // console.log("Random Controller Running");
  const self = this;

  self.newnpc = {};
  self.showcard = false;

  var classes=["Fighter", "Cleric", "Mage", "Thief", "Monk", "Druid", "Paladin", "Ranger", "Illusionist", "Assassin"]
  var clSpellsLv1=["cure light wounds", "light", "bless", "command", "create water", "detect magic", "protection from evil", "purify food and drink", "remove fear", "sanctuary"]
  var clSpellsLv2=["chant", "detect charm", "hold person", "know alignment", "resist fire", "silence 15' radius", "slow poison", "snake charm", "speak with animals", "spiritual hammer"]
  var muSpellsLv1=["burning hands", "charm person", "sleep", "magic missile", "detect magic", "light", "shocking grasp", "feather fall", "shield", "protection from evil"]


  self.generate = function() {

    //Set level between 1-8
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    //Set class
    self.newnpc.class = classes[Math.floor(Math.random() * 10)];

    //Set HP
    if (self.newnpc.class == 'Fighter' || self.newnpc.class == 'Paladin') {
      let fighterHP = 0;
      for (i = 0; i < self.newnpc.level; i++) {
        fighterHP += Math.floor(Math.random() * 9 + 1);
      }
      self.newnpc.maxhp = fighterHP;
    }
    if (self.newnpc.class == 'Cleric' || self.newnpc.class == 'Ranger') {
      let clericHP = 0;
      for (i = 0; i < self.newnpc.level; i++) {
        clericHP += Math.floor(Math.random() * 7 + 1);
      }
      self.newnpc.maxhp = clericHP;
    }
    if (self.newnpc.class == 'Mage' || self.newnpc.class == 'Illusionist') {
      let mageHP = 0;
      for (i = 0; i < self.newnpc.level; i++) {
        mageHP += Math.floor(Math.random() * 3 + 1);
      }
      self.newnpc.maxhp = mageHP;
    }
    if (self.newnpc.class == 'Thief' || self.newnpc.class == 'Assassin') {
      let thiefHP = 0;
      for (i = 0; i < self.newnpc.level; i++) {
        thiefHP += Math.floor(Math.random() * 5 + 1);
      }
      self.newnpc.maxhp = thiefHP;
    }
    if (self.newnpc.class == 'Monk' || self.newnpc.class == 'Druid') {
      let monkHP = 0;
      for (i = 0; i < self.newnpc.level; i++) {
        monkHP += Math.floor(Math.random() * 6 + 1);
      }
      self.newnpc.maxhp = monkHP;
    }



    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  };



  self.add = function(newnpc) {
    $http.post('/npcs', newnpc)
      .then(function(response) {
        console.log('response.data: ', response.data);
      });
  }



}]);
