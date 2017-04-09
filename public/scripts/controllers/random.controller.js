app.controller('RandomController', ['$http', '$location', function($http, $location) {
  // console.log("Random Controller Running");
  const self = this;

  self.newnpc = {};
  self.showcard = false;

  var clSpellsLv1=["cure light wounds", "light", "bless", "command", "create water", "detect magic", "protection from evil", "purify food and drink", "remove fear", "sanctuary"]
  var clSpellsLv2=["chant", "detect charm", "hold person", "know alignment", "resist fire", "silence 15' radius", "slow poison", "snake charm", "speak with animals", "spiritual hammer"]
  var muSpellsLv1=["burning hands", "charm person", "sleep", "magic missile", "detect magic", "light", "shocking grasp", "feather fall", "shield", "protection from evil"]

  self.generate = function() {
    switch (Math.floor(Math.random() * 4)) {
    // switch (2) {
      case 0:
      generateFighter();
      break;
      case 1:
      generateCleric();
      break;
      case 2:
      generateMU();
      break;
      case 3:
      generateThief();
      break;
      case 4:
      generateMonk();
      break;
      case 5:
      generateDruid();
      break;
      case 6:
      generatePaladin();
      break;
      case 7:
      generateRanger();
      break;
      case 8:
      generateIllusionist();
      break;
      case 9:
      generateAssassin();
      break;
    }
  }

  function generateFighter() {
    self.newnpc.class = 'Fighter'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set fighter attributes (Str must be 9+)
    self.newnpc.str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
      // Check for ex_str
      if (self.newnpc.str == 18) {
        self.newnpc.ex_str = Math.floor(Math.random() * 100);
      } else {
        self.newnpc.ex_str = 0;
      }
    }
    self.newnpc.int = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.dex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.con = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.wis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.cha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

    // Set HP based on level. First level receives max HP
    let hp = 10;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      hp += Math.floor(Math.random() * 10 + 1);
    }
    // adjust HP for Con
    if (self.newnpc.con == 15) {
      hp += (self.newnpc.level);
    } else if (self.newnpc.con == 16) {
      hp += (self.newnpc.level * 2);
    } else if (self.newnpc.con == 17) {
      hp += (self.newnpc.level * 3);
    } else if (self.newnpc.con == 18) {
      hp += (self.newnpc.level * 4);
    }
    self.newnpc.maxhp = hp;

    // Set AC between 3-9 (bell curve)
    let ac = (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1);
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items


    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateCleric() {
    self.newnpc.class = 'Cleric'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set cleric attributes (Wis must be 9+)
    self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.ex_str = 0;
    self.newnpc.int = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.dex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.con = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.wis = 0;
    for (i = 0; self.newnpc.wis < 9; i++) {
      self.newnpc.wis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }
    self.newnpc.cha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

    // Set HP based on level. First level receives max HP
    let hp = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      hp += Math.floor(Math.random() * 8 + 1);
    }
    // adjust HP for Con
    if (self.newnpc.con == 15) {
      hp += (self.newnpc.level);
    } else if (self.newnpc.con > 15) {
      hp += (self.newnpc.level * 2);
    }
    self.newnpc.maxhp = hp;

    // Set AC bewteen 3-9
    let ac = (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1);
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items

    // Set spells (at some point)

    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateMU() {
    self.newnpc.class = 'Magic-User'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;


    // Set mage attributes (Int must be 9+)
    self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.ex_str = 0;
    self.newnpc.int = 0;
    for (i = 0; self.newnpc.int < 9; i++) {
      self.newnpc.int = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }
    self.newnpc.dex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.con = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.wis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.cha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

    // Set HP based on level. First level receives max HP
    let hp = 4;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      hp += Math.floor(Math.random() * 4 + 1);
    }
    console.log(hp);
    // adjust HP for Con
    if (self.newnpc.con == 15) {
      hp += (self.newnpc.level);
    } else if (self.newnpc.con > 15) {
      hp += (self.newnpc.level * 2);
    }
    self.newnpc.maxhp = hp;

    // Set AC
    let ac = 10;
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items

    // Set spells (at some point)

    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateThief() {
    self.newnpc.class = 'Thief'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set thief attributes (Dex must be 9+)
    self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.ex_str = 0;
    self.newnpc.int = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.dex = 0
    for (i = 0; self.newnpc.dex < 9; i++) {
      self.newnpc.dex = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }
    self.newnpc.con = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.wis = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    self.newnpc.cha = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

    // Set HP based on level. First level receives max HP
    let hp = 6;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      hp += Math.floor(Math.random() * 6 + 1);
    }
    // adjust HP for Con
    if (self.newnpc.con == 15) {
      hp += (self.newnpc.level);
    } else if (self.newnpc.con > 15) {
      hp += (self.newnpc.level * 2);
    }
    self.newnpc.maxhp = hp;

    // Set AC bewteen 8-10
    let ac = (Math.floor(Math.random() * 4) + 1) + 6;
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items


    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateMonk() {
    self.newnpc.class = 'Monk'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set monk attributes (several requirements)
    self.newnpc.str = 0;
    self.newnpc.ex_str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set HP based on level. First level receives max HP
    let monkHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      monkHP += Math.floor(Math.random() * 4 + 1);
    }
    // adjust HP for Con
    if (self.newnpc.con == 15) {
      monkHP += (self.newnpc.level);
    } else if (self.newnpc.con == 16 || self.newnpc.con == 17 || self.newnpc.con == 18) {
      monkHP += (self.newnpc.level * 2);
    }
    self.newnpc.maxhp = monkHP;

    // Set AC based on...level?

    // Set items


    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateDruid() {
    self.newnpc.class = 'Druid'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set HP based on level. First level receives max HP
    let clericHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      clericHP += Math.floor(Math.random() * 8 + 1);
    }
    self.newnpc.maxhp = clericHP;

    // Set cleric attributes
    self.newnpc.str = 0;
    self.newnpc.ex_str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set AC bewteen

    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items

    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generatePaladin() {
    self.newnpc.class = 'Paladin'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set HP based on level. First level receives max HP
    let clericHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      clericHP += Math.floor(Math.random() * 8 + 1);
    }
    self.newnpc.maxhp = clericHP;

    // Set cleric attributes
    self.newnpc.str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set AC bewteen 3-9
    let ac = (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1);
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items


    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateRanger() {
    self.newnpc.class = 'Ranger'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set HP based on level. First level receives max HP
    let clericHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      clericHP += Math.floor(Math.random() * 8 + 1);
    }
    self.newnpc.maxhp = clericHP;

    // Set cleric attributes
    self.newnpc.str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set AC bewteen

    // Set items

    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateIllusionist() {
    self.newnpc.class = 'Illusionist'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set HP based on level. First level receives max HP
    let clericHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      clericHP += Math.floor(Math.random() * 8 + 1);
    }
    self.newnpc.maxhp = clericHP;

    // Set cleric attributes
    self.newnpc.str = 0;
    self.newnpc.ex_str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set AC
    let ac = 10;
    // Adjust AC for Dex
    if (self.newnpc.dex == 15) {
      ac -= 1;
    } else if (self.newnpc.dex == 16) {
      ac -= 2;
    } else if (self.newnpc.dex == 17) {
      ac -= 3;
    } else if (self.newnpc.dex == 18) {
      ac -= 4;
    }
    self.newnpc.ac = ac;

    // Set items

    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }


  function generateAssassin() {
    self.newnpc.class = 'Assassin'

    // Set level between 1-7
    self.newnpc.level = Math.floor(Math.random() * 7) + 1;

    // Set HP based on level. First level receives max HP
    let clericHP = 8;
    for (i = 0; i < self.newnpc.level - 1; i++) {
      clericHP += Math.floor(Math.random() * 8 + 1);
    }
    self.newnpc.maxhp = clericHP;

    // Set cleric attributes
    self.newnpc.str = 0;
    for (i = 0; self.newnpc.str < 9; i++) {
      self.newnpc.str = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    }

    // Set AC bewteen

    // Set items


    console.log("self.newnpc: ", self.newnpc);
    self.showcard = true;
  }





  // Add npc to database
  self.add = function(newnpc) {
    $http.post('/npcs', newnpc)
      .then(function(response) {
        console.log('response.data: ', response.data);
      });
  }


}]);
