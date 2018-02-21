window.onload = function () {
  startGame();
}

var startGame = function() {
  battleController.turn++;
  battleController.listOfPlayers = [new Player("player1",IGmanager), new Player("player2",IGmanager)];
  var player1 = battleController.listOfPlayers[0];
  var player2 = battleController.listOfPlayers[1];
  player1.addSquad(player1.race.getImperialGuardianSquad(player1.army.length,2,4));
  player2.addSquad(player2.race.getImperialGuardianSquad(player2.army.length,1,4));
  battleController.chosenPlayer = player1;

  drawer.createMap();
  drawer.createTable();
  drawer.writeMap();


  window.addEventListener("keydown",checkKeyPress,false);
}
