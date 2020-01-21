// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var memoryList = [];
var userNumbers = [];

// generiamo 5 numeri random tutti differenti
var l = 0;
while (l < 5) {
  var randomNum = genRandomNum(1, 10);
  var randomInArray = isInArray(memoryList, randomNum);
  if (randomInArray == false){
    memoryList.push(randomNum);
    l++;
  }
}
// avviso per l'utente
alert('I numeri da memorizzare sono ' + memoryList + '. Hai 30 secondi per memorizzarli.');
// timer 30 secondi
var num = setTimeout(function () {
  var n = 0;
  while (n < 5) {
    var numUser = parseInt(prompt('Inserisci un numero presente nella lista'));
    var userInUserNum = isInArray(userNumbers, numUser);
    if (userInUserNum == false) {
      var userInArray = isInArray(memoryList, numUser);
      if (userInArray == true) {
        userNumbers.push(numUser);
      }
      n++;
    } else {
      alert('Hai già inserito questo numero, inseriscine un altro');
    }
  }
  alert('Hai inserito ' + (userNumbers.length) + ' numeri corretti. I numeri sono ' + userNumbers + '.');
}, 3000);



// funzione per numero random
function genRandomNum(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + min;
  return random;
}

// funzione controlla in array
function isInArray(array, num) {
  var i = 0;
  var found = false;
  while (i < array.length && found == false) {
    if (array[i] == num) {
      found = true;
    }
    i++;
  }
  return found;
}
