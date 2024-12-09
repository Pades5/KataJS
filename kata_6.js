let str = prompt("entrez une chaine de caractere");
function countBs(x) {
  let resultat = 0;
  for (let i = 0; i <= x.length; i++) {
    if (x[i] == "B") {
      resultat = resultat + 1;
    }
  }
  return resultat;
}
let compa = prompt("entrez la lettre a rechercher");
function CountChar(x, y) {
  let resultat = 0;
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === y) {
      resultat = resultat + 1;
    }
  }
  return resultat;
}

alert(countBs(str));
alert(CountChar(str, compa));
