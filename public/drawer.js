


  var drawer = {
    map: [],
    table: [],
  createMap: function(){
    for(var i = 0; i < 10; i++){
      this.map[i] = new Array(10);
      for(var j = 0; j < 10; j++){
        this.map[i][j]=" ";
      }
    }
  },
  createTable: function(){
    var body = document.getElementsByTagName("body");
    var infoDiv = document.createElement("div");
    infoDiv.setAttribute("class","hide");
    infoDiv.setAttribute("id","infoBlock");
    body[0].appendChild(infoDiv);

    var changeSquadButton = document.createElement("button");
    changeSquadButton.setAttribute("onclick","game.player1.changeSquad()");
    changeSquadButton.innerHTML = "Сменить отряд";
    infoDiv.appendChild(changeSquadButton);

    var attackSquadButton = document.createElement("button");
    attackSquadButton.setAttribute("onclick","game.player1.chosen.attackSquad()");
    attackSquadButton.innerHTML = "Атаковать";
    infoDiv.appendChild(attackSquadButton);

    $(function() {
       var serverButton = document.createElement('button');
       serverButton.innerHTML = "Сохранить";
       $(serverButton).on("click",function () {
         var params = watcher.save();
         $.post("/json", params,
                function(data){
                 });
       });
       $(infoDiv).append(serverButton);

       var serverButtonLoad = document.createElement('button');
       serverButtonLoad.innerHTML = "Загрузка";
       $(serverButtonLoad).on("click",function () {
         var params = 0;
         $.get("/load",params,
                function(data){
                  watcher.load(data);

                 });
       });
       $(serverButton).after(serverButtonLoad);

       var nextStepButton = document.createElement('button');
       nextStepButton.innerHTML = "Следующий ход";
       $(nextStepButton).on("click",function () {
         battleController.nextStep();
       })
       $(serverButtonLoad).after(nextStepButton);
     })

    for(var i = 0; i < 10; i++){
      this.table[i] = new Array(10);
      if (i!=0) {
        var clearBlock = document.createElement("div");
        clearBlock.setAttribute("class","clear");
        body[0].appendChild(clearBlock);
      }
      for(var j = 0; j < 10; j++){
      this.table[i][j] = document.createElement("div");
      this.table[i][j].setAttribute("class","table-blocks");
      this.table[i][j].setAttribute("valign","middle");
      body[0].appendChild(this.table[i][j]);
        }
      }
      var clearBlock = document.createElement("div");
      clearBlock.setAttribute("class","clear");
      body[0].appendChild(clearBlock);
},

        writeTable: function() {
          for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
              this.table[i][j].innerHTML = this.map[i][j];
    }
  }
},
           writeMap: function() {
        var path;
        path = battleController.listOfPlayers[0].army.concat(battleController.listOfPlayers[1].army)
        for(var i = 0; i < 10; i++){
          for (var j = 0; j < 10; j++) {

           for (var k = 0; k < path.length; k++){
             if (i == path[k].x && j == path[k].y) {
              this.map[i][j] = path[k].name;
               j++;

             } else {
               this.map[i][j] = " ";
       }
     }
    }
  }
  this.writeTable();
},


workWithControlPanel: function() {
  var magicDiv = document.getElementById("infoBlock")
if (magicDiv.getAttribute("class")=="hide") {
  magicDiv.setAttribute("class","show");
} else {
  magicDiv.setAttribute("class","hide");
}
},
moveTo(squad,direction){


  if (direction == "UP") {
    if(squad.x!=0 && this.map[squad.x-1][squad.y]==" "){
      squad.x--;
    }
  } else
  if (direction == "DOWN") {
    if(squad.x!= this.map.length-1 && this.map[squad.x+1][squad.y]==" "){
      squad.x++;
    }
  } else
  if (direction == "LEFT") {
    if(squad.y!=0 && this.map[squad.x][squad.y-1]==" "){
      squad.y--;
    }
  } else
  if (direction == "RIGHT") {
    if(squad.y!= this.map.length-1 && this.map[squad.x][squad.y + 1]==" "){
      squad.y++;
    }
  }
  this.writeMap();
}

}



function checkKeyPress(key) {
   if(key.keyCode == "37"){
     drawer.moveTo(battleController.chosenPlayer.chosen,"LEFT");
   } else if(key.keyCode == "38"){
     drawer.moveTo(battleController.chosenPlayer.chosen,"UP");
   } else if(key.keyCode == "39"){
     drawer.moveTo(battleController.chosenPlayer.chosen,"RIGHT");
   } else if(key.keyCode == "40"){
     drawer.moveTo(battleController.chosenPlayer.chosen,"DOWN");
   } else if(key.keyCode == "17"){
      drawer.workWithControlPanel()
   }
}
