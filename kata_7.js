function range(x, y) {
  let creation = [];
  for (let i = x; i <= y; i++) {
    creation.push(i);
  }
  return creation;
}

function range2(x, y, z) {
  let creation = [];
  if (z < 0) {
    for (let i = x; i >= y; i--) {
      creation.push(i);
    }
    return creation;
  } else
    for (let i = x; i <= y; i++) {
      creation.push(i);
    }
  return creation;
}

console.log(range2(5, 2, -1));
//console.log(sum(range(1, 10)));
