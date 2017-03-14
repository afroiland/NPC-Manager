app.controller('RandomController', ['$http', '$location', function($http, $location) {
  console.log("Random Controller Running");
  const self = this;

  self.newnpc = {};

  var classes=["Fighter", "Cleric", "Mage", "Thief", "Monk", "Druid", "Paladin", "Ranger", "Illusionist", "Assassin"]
  var clSpellsLv1=["cure light wounds", "light", "bless", "command", "create water", "detect magic", "protection from evil", "purify food and drink", "remove fear", "sanctuary"]
  var clSpellsLv2=["chant", "detect charm", "hold person", "know alignment", "resist fire", "silence 15' radius", "slow poison", "snake charm", "speak with animals", "spiritual hammer"]
  var muSpellsLv1=["burning hands", "charm person", "sleep", "magic missile", "detect magic", "light", "shocking grasp", "feather fall", "shield", "protection from evil"]


  self.generate = function() {
    self.newnpc.class = classes[Math.floor(Math.random() * 10)];
    console.log("self.newnpc: ", self.newnpc);
  };




}]);
