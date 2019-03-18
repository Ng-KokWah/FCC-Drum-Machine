function plays(value) {
  console.log(value);
  var x = document.getElementById(value); 
  x.play();
  switch(value) {
    case 'Q':
      document.getElementById("display").innerHTML="Heater-1"
      break;
    case 'W':
      document.getElementById("display").innerHTML="Heater-2"
      break;
     case 'E':
      document.getElementById("display").innerHTML="Heater-3"
      break;
     case 'A':
      document.getElementById("display").innerHTML="Heater-4"
      break;
     case 'S':
      document.getElementById("display").innerHTML="Heater-6"
      break;
     case 'D':
      document.getElementById("display").innerHTML="Disc"
      break;
     case 'Z':
      document.getElementById("display").innerHTML="Kick_n_Hat"
      break;
     case 'X':
      document.getElementById("display").innerHTML="Kick"
      break;
     case 'C':
      document.getElementById("display").innerHTML="Snarl"
      break;
  }
}

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 81:
       plays('Q');
        break;
    case 87:
        plays('W');
        break;
    case 69:
        plays('E');
        break;
     case 65:
        plays('A');
        break;
      case 83:
        plays('S');
        break;
      case 68:
        plays('D');
        break;
      case 90:
        plays('Z');
        break;
      case 88:
        plays('X');
        break;
      case 67:
        plays('C');
        break;
  }
   /* if (event.keyCode == 81) {
        plays('Q');
    }
    else if (event.keyCode == 87) {
        alert('Right was pressed');
    }*/
}, true);