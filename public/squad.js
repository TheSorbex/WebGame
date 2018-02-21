
function Squad(name,x,y) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.ws = true;
  this.player = {};
  this.target = {};
  this.arr = [];
  this.makeSquadFull = function () {
    for (var i = 0; i < 6; i++){
      this.arr[i] = new Creature("nameAlesha " + (i+1),100,20,40,2,5,4);
    }
  }

  this.addCreature = function(creature){
    this.arr[this.arr.length-1] = creature;
  }

  this.attack = function () {
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
};

this.recieveDamage = function () {
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
};
}
