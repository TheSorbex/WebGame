IGmanager = {
  weaponsBs: {
    lasgan: new Weapon("lasgan",false,50,4)
  },
  weaponsDs:{
    sword: new Weapon("sword",true,50,1)
  },
  armours:{
    lightArmour: new Armour("lightArmour",0,0,50)
  },

  createImperialGuardian:function () {

    return new Creature("Imperial Guardian",IGmanager.armours.lightArmour,this.weaponsBs.sword,this.weaponsDs.lasgan);
  },

  getImperialGuardianSquad:function(id,x,y){
    squad = new Squad("IG "+id,x,y);
    for (var i = 0; i < 6; i++) {
      squad.addCreature(this.createImperialGuardian());
    }
    return squad;
  }
}
