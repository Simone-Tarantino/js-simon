// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var memoryList = [1, 2, 3, 5];
//
// for (var i = 0; i < 5; i++) {
//   var randomNum = genRandomNum(1, 10);
//   memoryList.push(randomNum);
// }

var trovato = isInArray(memoryList, 4);
console.log(trovato);

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
