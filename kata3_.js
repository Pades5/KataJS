let echec = " ";
let a = prompt("entrez une valeur de boucle");
for (let y = 0; y < a; y++) {
  for (let x = 0; x < a; x++) {
    if ((y % 2 == 0 && x % 2 == 0) || (y % 2 != 0 && x % 2 != 0))
      echec = echec + " ";
    else if ((y % 2 == 0 && x % 2 != 0) || (y % 2 != 0 && x % 2 == 0))
      echec = echec + "#";
  }
  echec += "\n";
}
console.log(echec);
