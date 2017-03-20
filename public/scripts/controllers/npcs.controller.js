app.controller('npcsController', ['$http', '$location', function($http, $location) {
  console.log("NPCs Controller Running");
  const self = this;

  self.npcs = [];
  self.show = false;

  self.getnpcs = function() {
    console.log('npcscontroller getnpcs');
    $http.get('/npcs')
      .then(function(response) {
        console.log('response.data: ', response.data);
        self.npcs = response.data;
        self.show = true;
      });
  }

  self.update = function(npc) {
    console.log('updating NPC info');
    console.log('npc: ', npc);
    $http.put('/npcs/' + npcId, npc)
      .then(function(response) {
        console.log('response.data: ', response.data);
        self.npcs = response.data;
        self.show = true;
      });
  }


}]);
