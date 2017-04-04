app.controller('AddnpcController', ['$http', '$location', function($http, $location) {
  // console.log("Add NPC Controller Running");
  const self = this;

  self.add = function(newnpc) {
    // console.log('button works');
    $http.post('/npcs', newnpc)
      .then(function(response) {
        console.log('response.data: ', response.data);
      });
  }



}]);
