function Creature(name,armour,wsWeapon,bsWeapon){
  this.name = name;
  this.armour = armour;
  this.health = armour.health;
  this.wsWeapon = wsWeapon;
  this.bsWeapon = bsWeapon;
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
