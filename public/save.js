
var watcher = {
  x:0,
  y:0,
  savedObj:{},
  loadPlayer1: function () {
    for (var i = 0; i < battleController.listOfPlayers.length; i++) {
      battleController.listOfPlayers[i].army = [];
    for (var j = 0; j < this.savedObj[i].length; j++) {
      battleController.listOfPlayers[i].addSquad(new Squad(this.savedObj[i][j].name,this.savedObj[i][j].x,this.savedObj[i][j].y));
      battleController.listOfPlayers[i].army[j].makeSquadFull();
    }
  }
      console.log(battleController.listOfPlayers);

      drawer.writeMap();

  },
  save:function () {
    // var result = JSON.stringify({x: this.x, y: this.y});
    var result = "";
    var obj = [];
    for (var i = 0; i < battleController.listOfPlayers.length; i++) {
      obj[i] = [];
      for (var j = 0; j < battleController.listOfPlayers[i].army.length; j++) {
        obj[i][j] = {};
        obj[i][j].x = battleController.listOfPlayers[i].army[j].x;
        obj[i][j].y = battleController.listOfPlayers[i].army[j].y;
        obj[i][j].name = battleController.listOfPlayers[i].army[j].name;
      }
    }
    result += JSON.stringify(obj);
    console.log(result);
    console.log("saved");
    return result;
  },
  load: function (json) {

    console.log(json);
    var obj;
    for(prop in json){
      obj = JSON.parse(prop);
    }
    // this.x = obj.x;
    // this.y = obj.y;
    this.savedObj = obj;
    console.log(obj);
    this.loadPlayer1();
}

}
module.exports = watcher;
