app.controller('npcsController', ['$http', '$location', function($http, $location) {
  console.log("NPCs Controller Running");
  const self = this;

  self.npcs = [];

  getnpcs();

  function getnpcs() {
    console.log('npcscontroller getnpcs');
    $http.get('/npcs')
      .then(function(response) {
        console.log('response.data: ', response.data);
        self.npcs = response.data;
      });
  }


}]);
