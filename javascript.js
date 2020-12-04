
var data = require("./data.json");


 function allTopingTypes(){

    var  x = "";
    for (let i=0; i<data[0].topping.length;i++) {
        x += data[0].topping[i].type + " ";
      }
    console.log("All Toping Types:"+x);
 }
 allTopingTypes();

 console.log("*******************************************");
 function allBatterTypes(){

    var myObj, i, j,x = "";
    for (let i=0; i<data.length;i++) {
        for (let j=0; j< data[i].batters.batter.length; j++) {
          

        x += data[i].batters.batter[j].type + " ";
      }
    }
    console.log("All Batter Types:"+x);
 }
 allBatterTypes();
 console.log("*******************************************");

 function ppuAverage(){
	 var sum=0;

    for (let i=0; i<data.length;i++) {

        sum += data[i].ppu ;
      
    }
    var avg=sum/data.length;
    console.log("The Ppu avg ="+avg);
 }
   ppuAverage();
console.log("*******************************************");

 function ppuSum(){
    var sum = 0;
    for (let i=0; i<data.length;i++) {
      

        sum += data[i].ppu ;
      
    }
    console.log("The Ppu sum=",sum);
 }

ppuSum();
console.log("*******************************************");


function allIDs(){

    var  x = "";
    for ( let i=0; i< data.length; i++ ) {
        
        x += data[i].id + " ";
        for (let j=0; j< data[i].batters.batter.length;j++ ) {
          

        x += data[i].batters.batter[j].id + " ";
      }
      for (let k=0; k< data[i].topping.length;k++ ) {
          

        x += data[i].topping[k].id + " ";
      }
    }
    console.log("All IDS:",x);
 }
 allIDs();
 console.log("*******************************************");