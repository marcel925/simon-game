
  
  
var start = 0;
var strict = 0;
var turnOn = 0;
var array = [Math.floor((Math.random() * 4) + 1)];
var demoCount = 0;
var demo = "off";

document.getElementById("instructionsButton").onclick = function(){
  if (  document.getElementById("instructions").style.display == "block" ) {
  document.getElementById("instructions").style.display = "none";
  }
  
  else { document.getElementById("instructions").style.display = "block" }
}

document.getElementById("onBlue").onclick = function(){
  
  document.getElementById("onBlue").style.backgroundColor = "blue";
  
  turnOn = 1;
  
  document.getElementById("offBlue").style.backgroundColor = "darkgray";
  
  document.getElementById("scoreboard").innerHTML = "!!!";
 
}


document.getElementById("offBlue").onclick = function(){
  
  document.getElementById("offBlue").style.backgroundColor = "blue";
  
start = 0;
strict = 0;
turnOn = 0;
array = [Math.floor((Math.random() * 4) + 1)];
demoCount = 0;
testCount = 0;
demo = "off";
  
  document.getElementById("onBlue").style.backgroundColor = "darkgray";
  
  document.getElementById("scoreboard").innerHTML = "";
  
  document.getElementById("startButton").style.backgroundColor = "gray";
  
  document.getElementById("strictButton").style.backgroundColor = "gray";

 
}

  
document.getElementById("startButton").onclick = function(){
  
  if (turnOn == 0) {
    alert("Turn Simon on first. See instructions")
  }
  
  if (turnOn == 1) {
  
  if (document.getElementById("startButton").style.backgroundColor === "red") {
   
    document.getElementById("startButton").style.backgroundColor = "gray";
    start = 0;
  }
  
  else {
    
document.getElementById("startButton").style.backgroundColor = "red";
    start = 1;
    
    if (demo == "off") {
    gamePlay();
    }
    
  }
  }


document.getElementById("strictButton").onclick = function(){
  
  if (document.getElementById("strictButton").style.backgroundColor === "red") {
    document.getElementById("strictButton").style.backgroundColor = "gray";
    strict = 0;
  }
  
  else {
document.getElementById("strictButton").style.backgroundColor = "red";
  strict = 1;
  
  }
}
}



var demoInterval;

function gamePlay() {
  
  demo = "on";
  
  document.getElementById("scoreboard").innerHTML = array.length;
  
  demoCount = 0;

  if (array.length < 5 && array.length >= 0) {
  
  demoInterval = setInterval(demoMoves, 1000); 
  }
  
  if (array.length < 9 && array.length >= 5) {
  
  demoInterval = setInterval(demoMoves, 900); 
  }
  
  if (array.length < 13 && array.length >= 9) {
  
  demoInterval = setInterval(demoMoves, 800); 
  }
  
  if (array.length < 25 && array.length >= 13) {
  
  demoInterval = setInterval(demoMoves, 700); 
  }
  
  return;

}


 
function demoMoves() {
    
  resetColors();
  
  if (array[demoCount] == 1) {
    document.getElementById("topLeft").style.backgroundColor = "#80ff00";
    document.getElementById("audio1").play(); 
  }
  
  if (array[demoCount] == 2) {
    document.getElementById("topRight").style.backgroundColor = "#ff3333";
    document.getElementById("audio2").play(); 
  }
  
  if (array[demoCount] == 3) {
    document.getElementById("bottomLeft").style.backgroundColor = "#ffff33";
    document.getElementById("audio3").play(); 
  }
  
  if (array[demoCount] == 4) {
    document.getElementById("bottomRight").style.backgroundColor = "#4d4dff";
    document.getElementById("audio4").play(); 
  }
  
  demoCount++;
  
  if (demoCount + 1 > array.length) {
    clearInterval(demoInterval);

    setTimeout(resetColors, 1000);
    demoCount = 0;
    demo = "off";
    testMoves();
    return;
  }
}

var testCount = 0;


function testMoves() {
  
  if (demo == "on") {
    return;
  }
  
  testCount = 0;
  
  document.getElementById("topLeft").onmousedown = function() {
    
    if (demo == "on") {
    return;
  }
    
     else if (array[testCount] !== 1) {
      
        if (strict == 1) {
          array = [Math.floor((Math.random() * 4) + 1)];
      }
       
        document.getElementById("wrongAnswer").play();
        document.getElementById("topLeft").style.backgroundColor = "black";
        setTimeout(resetColors, 1000);
        testCount = 0;
        gamePlay();
        return;
     }
    
    else if (array[testCount] == 1) {
  
  document.getElementById("topLeft").style.backgroundColor = "#80ff00";
  document.getElementById("audio1").play(); 
      testCount++;
    
      if (testCount == array.length) {
         if (testCount > 19) {
           alert("Congratulations! You beat Level 20! You won the game Simon!");
           start = 0;
           strict = 0;
           turnOn = 0;
           array = [];
      }
        
        array.push(Math.floor(Math.random() * 4) + 1);
        testCount = 0;
        gamePlay();
        return;
       
    }
      }
          
    }


document.getElementById("topLeft").onmouseup = function() {
  resetColors();
}


document.getElementById("topRight").onmousedown = function() {
  
  if (demo == "on") {
    return;
  }
  
     else if (array[testCount] !== 2) {
      
        if (strict == 1) {
          array = [Math.floor((Math.random() * 4) + 1)];
      }
       
        document.getElementById("wrongAnswer").play();
        document.getElementById("topRight").style.backgroundColor = "black";
        setTimeout(resetColors, 1000);
        testCount = 0;
        gamePlay();
        return;
     }
  
  
    else if (array[testCount] == 2) {
  
  document.getElementById("topRight").style.backgroundColor = "#ff3333";
  document.getElementById("audio2").play(); 
  testCount++;
      
      if (testCount == array.length) {
        if (testCount > 19) {
          alert("Congratulations! You beat Level 20! You won the game Simon!");
          start = 0;
          strict = 0;
          turnOn = 0;
          array = [];
      }
        
        array.push(Math.floor((Math.random() * 4) + 1));
        testCount = 0;
        gamePlay();
        return;
        
    }
      }
      
}

document.getElementById("topRight").onmouseup = function() {
  resetColors();  
}


document.getElementById("bottomLeft").onmousedown = function() {
  
  if (demo == "on") {
    return;
  }
  
    else if (array[testCount] !== 3) {
      
        if (strict == 1) {
          array = [Math.floor((Math.random() * 4) + 1)];
      }
       
        document.getElementById("wrongAnswer").play();
        document.getElementById("bottomLeft").style.backgroundColor = "black";
        setTimeout(resetColors, 1000);
        testCount = 0;
        gamePlay();
        return;
     }
  
  
   else if (array[testCount] == 3) {
  
  document.getElementById("bottomLeft").style.backgroundColor = "#ffff33";
  document.getElementById("audio3").play(); 
  testCount++;
      
      if (testCount == array.length) {
        if (testCount > 19) {
          alert("Congratulations! You beat Level 20! You won the game Simon!");
          start = 0;
          strict = 0;
          turnOn = 0;
          array = [];
        
      }
        
        array.push(Math.floor((Math.random() * 4) + 1));
        testCount = 0;
        gamePlay();
        return;
        
    }
      }
    
}

document.getElementById("bottomLeft").onmouseup = function() {
  resetColors();  
}


document.getElementById("bottomRight").onmousedown = function() {
  
  if (demo == "on") {
    return;
  }
  
    else if (array[testCount] !== 4) {
      
        if (strict == 1) {
          array = [Math.floor((Math.random() * 4) + 1)];
      }
       
        document.getElementById("wrongAnswer").play();
        document.getElementById("bottomRight").style.backgroundColor = "black";
        setTimeout(resetColors, 1000);
        testCount = 0;
        gamePlay();
        return;
     }
  
  
   else if (array[testCount] == 4) {
  
  document.getElementById("bottomRight").style.backgroundColor = "#4d4dff";
  document.getElementById("audio4").play(); 
  testCount++;
      
      if (testCount == array.length) {
        if (testCount > 19) {
        alert("Congratulations! You beat Level 20! You won the game Simon!");
        start = 0;
        strict = 0;
        turnOn = 0;
        array = [];
      }
        
        array.push(Math.floor((Math.random() * 4) + 1));
        testCount = 0;
        gamePlay();
        return;
    }
      }
    
    
}

document.getElementById("bottomRight").onmouseup = function() {
  resetColors();  
}  

}



function resetColors() {
  
  document.getElementById("topLeft").style.backgroundColor = "#008000";
  document.getElementById("topRight").style.backgroundColor = "#cc0000";
  document.getElementById("bottomLeft").style.backgroundColor = "#cccc00";
  document.getElementById("bottomRight").style.backgroundColor = "#0000b3";

}
  

  