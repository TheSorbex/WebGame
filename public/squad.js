

  var squadAlesha = {
    name: "Udurki",
    x: 4,
    y: 4,
    ws: true,
    life:true,
    player:{},
    arr: [],
    target: {},
    makeSquadFull: function(){
      for (var i = 0; i < 6; i++){
        this.arr[i] = new Creature("nameAlesha " + (i+1),100,20,40,2,5,4);
      }
    },
    changeTypeOfAttack: function(){
      if (ws == true){
        ws = false;
      } else{
        ws = true;
      }
    },
    attackSquad: function(){
      var sum = 0;
      for (var i = 0; i < this.arr.length; i++){
      var resultRange = this.arr[i].checkRange(this,this.target);
      if (resultRange == false) {
        console.log("Не хватает радиуса");
      } else {
      if (result = "ws") {
        this.ws = true;
      } else if (result = "bs"){
        this.ws = false;
      }
        sum += this.arr[i].attack(this.ws);
      this.target.recieveDamage(sum, this.ws);
      }
    }
    },
    recieveDamage: function(damage,isWs){
      var currentArmour;
      if(isWs){
        currentArmour = "wsArmour";
      } else{
        currentArmour = "bsArmour";
      }
      while(damage > 0 && this.arr.length > 0){
          if (this.arr[0][currentArmour] < damage){
            if(this.arr[0].health > (damage - this.arr[0][currentArmour]))
            {
              this.arr[0].health -= damage - this.arr[0][currentArmour]
              break;
            }
            else if(this.arr[0].health <= damage - this.arr[0][currentArmour]){
              damage -= (this.arr[0].health + this.arr[0][currentArmour]);
              console.log("damage = " + damage);
              console.log(this.arr[0].name + "умер");
              this.arr.splice(0, 1);
              if (this.arr.length==0) {
                this.life = false;
                console.log(game.listOfPlayers[1])
                game.listOfPlayers[0].removeDeadSquads();
                game.listOfPlayers[1].removeDeadSquads();

              }
              game.writeMap();
            }
          }

        }
      console.log(this.arr);
    }
}

// var squadLuda = Object.assign({},squadAlesha);
// squadLuda.name = "КУРВЫ";
// squadLuda.x = 1;
//
// var daunSquad = Object.assign({},squadAlesha);
// daunSquad.name = "Дауны";
// daunSquad.x = 3;


// game.player1.addSquad(squadLuda);
// game.player1.addSquad(daunSquad);

// game.startGame();
// game.player1.army[0].target = game.player1.army[2];
