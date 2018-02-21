
function Player(name,race) {
  this.name = name;
  this.race = race;
  this.chosen = {};
  this.army = [];

  this.addSquad = function (squad) {
    squad.player = this;
    this.army[this.army.length] = squad;
    this.chosen = this.army[0];
  };

  this.changeSquad = function () {
    if (this.army.length>0) {
      if (this.army.indexOf(this.chosen)==this.army.length-1) {
        this.chosen = this.army[0];
      } else {
        this.chosen = this.army[this.army.indexOf(this.chosen)+1]
      }
      console.log(this.chosen.name);
    }
  };

  this.removeDeadSquads = function () {
    for (var i = 0; i < this.army.length; i++) {
      if (this.army[i].life == false) {
        this.army.splice(i,1);
    var obj;
    for(prop in json){
      obj = JSON.parse(prop);
    }
    // this.x = obj.x;
    // this.y = obj.y;
    this.savedObj = obj;
        i--;
      }
    }
    drawer.writeMap();
  };
  }
