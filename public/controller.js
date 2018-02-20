window.onload = function () {
  startGame();
}

var startGame = function() {
  squadAlesha.makeSquadFull();
  player1.addSquad(squadAlesha);

  drawer.createMap();
  drawer.createTable();
  drawer.writeMap();


  window.addEventListener("keydown",checkKeyPress,false);
}
