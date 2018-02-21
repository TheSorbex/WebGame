var battleController = {
  chosenPlayer:{},
  listOfPlayers:[],
  currentTurn:0,
  endOfGame:false,
  winners:[],

  nextStep: function () {
    var index = this.listOfPlayers.indexOf(this.chosenPlayer);
    var end = this.listOfPlayers.length-1;
    if (index == end){
      index = 0;
    } else {
      index++;
    }
    console.log(this.listOfPlayers.length-1);
    console.log(index);
    this.chosenPlayer = this.listOfPlayers[index];
    console.log(this.chosenPlayer.name);
  }
}
