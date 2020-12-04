
var data = require("./data.json");

console.log("All IDS:");
 function allTopingTypes(){

    var  x = "";
    for (let i=0; i<data[0].topping.length;i++) {
        x += data[0].topping[i].type + "<br>";
      }
    console.log("All Toping Types:"+x);
 }


 function allBatterTypes(){

    var myObj, i, j,x = "";
    for (let i=0; i<data.length;i++) {
        for (let j=0; j< data[i].batters.batter.length; j++) {
          

        x += data[i].batters.batter[j].type + "<br>";
      }
    }
    console.log("All Batter Types:"+x);
 }

 function ppuAverage(){

    for (let i=0; i<data.length;i++) {

        sum += data[i].ppu ;
      
    }
    var avg=sum/data.length;
    console.log("The Ppu avg ="+avg);
 }


 function ppuSum(){
    var i,x = "";
    for (i in data) {
       data[i].ppu

        sum += data[i].ppu ;
      
    }
    console.log("The Ppu sum=",sum);
 }





function allIDs(){

    var  x = "";
    for ( let i=0; i< data.length; i++ ) {
        
        x += data[i].id + "<br>";
        for (let j=0; j< data[i].batters.batter.length;j++ ) {
          

        x += data[i].batters.batter[j].id + "<br>";
      }
      for (let k=0; k< data[i].topping.length;j++ ) {
          

        x += data[i].topping[j].id + "<br>";
      }
    }
    console.log("All IDS:",x);
 }