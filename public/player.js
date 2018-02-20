var player1 = {
  chosen:{},
  army: [],
  addSquad: function(squad){
    squad.player = this;
    this.army[this.army.length] = squadAlesha;
    this.chosen = this.army[0];

  },
  changeSquad: function() {
    if (this.army.length>0) {
      if (this.army.indexOf(this.chosen)==this.army.length-1) {
        this.chosen = this.army[0];
      } else {
        this.chosen = this.army[this.army.indexOf(this.chosen)+1]
      }
      console.log(this.chosen.name);
    }
  },
  removeDeadSquads: function() {
    for (var i = 0; i < this.army.length; i++) {
      if (this.army[i].life == false) {
        this.army.splice(i,1);
        i--;
      }
    }
    drawer.writeMap();
  }
}
