function Creature(name,health,ws,bs,wsArmour,bsArmour,range){
  this.name = name;
  this.health = health;
  this.ws = ws;
  this.bs = bs;
  this.wsArmour = wsArmour;
  this.bsArmour = bsArmour;
  this.range = range;
  this.attack = function(isWs){
    if (isWs == true){
      return ws;
    } else{
      return bs;
    }
  }


  this.checkRange = function(MySquad, enemySquad){
    if (Math.abs(MySquad.x - enemySquad.x) <= range && Math.abs(MySquad.y - enemySquad.y) <= range) {
      if(Math.abs(MySquad.x - enemySquad.x) <= 1 && Math.abs(MySquad.y - enemySquad.y) <= 1){
        return "ws";
      } else {
        return "bs";
      }
    } else {
      return false;
    }
  }
}
