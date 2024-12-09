function range(x, y) {
  let creation = [];
  for (let i = x; i <= y; i++) {
    creation.push(i);
  }
  return creation;
}

function range2(x, y, z) {
  let creation = [];
  for (let i = x; i <= y; i++) {
    creation.push(i);
  }
  let arret = z;

  for (let j = 0; j < creation.length; j += arret) {
    console.log(creation[j]);
  }
}

console.log(range2(1, 10, 2));
//console.log(sum(range(1, 10)));
