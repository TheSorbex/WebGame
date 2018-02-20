


game = {
  chosenPlayer:this.player1,
  listOfPlayers:[],



startGame(){
  var player2 = Object.assign({},game.player1);
  game.listOfPlayers[game.listOfPlayers.length] = game.player1;
  game.listOfPlayers[game.listOfPlayers.length] = player2;
  drawer.createMap();
  drawer.createTable();
  drawer.writeMap();

  game.player1.army[0].makeSquadFull();
  game.player1.army[2].makeSquadFull();

}




}
