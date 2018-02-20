
var watcher = {
  x:0,
  y:0,
  savedObj:{},
  detectForPlayer1: function () {
    this.x = squadAlesha.x;
    this.y = squadAlesha.y;
  },
  loadPlayer1: function () {




      player1.chosen.x = this.savedObj.x;
      player1.chosen.y = this.savedObj.y;
      drawer.writeMap();

  },
  save:function () {
    var result = JSON.stringify({x: this.x, y: this.y});
    return result;
  },
  load: function (json) {

    console.log(json);
    var obj;
    for(prop in json){
      obj = JSON.parse(prop);
    }
    this.x = obj.x;
    this.y = obj.y;
    this.savedObj = obj;
    this.loadPlayer1();
}

}
module.exports = watcher;
