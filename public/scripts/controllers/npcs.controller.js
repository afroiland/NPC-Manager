app.controller('npcsController', ['$http', '$location', function($http, $location) {
  console.log("NPCs Controller Running");
  const self = this;

  self.npcs = [];
  self.show = false;

  getnpcs();

  function getnpcs() {
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
    $http.put('/npcs/' + npc.id, npc)
      .then(function(response) {
        console.log('response.data: ', response.data);
        // self.npcs = response.data;
        // self.show = true;
      });
  }


}]);
