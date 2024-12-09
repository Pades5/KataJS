let i = +prompt("entrez un entier positif");

function isEvent(i) {
  if (Number.isInteger(i) && i >= 0) {
    if (i >= 2) {
      i -= 2;
      return isEvent(i);
    }
    if (i == 0) return true;
    else return false;
  }
  alert("chiffre faux");
}
console.log(isEvent(i));
