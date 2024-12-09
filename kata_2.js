let x = 0;
for (let y = 0; y <= 100; y++) {
  x = y;
  if (x % 3 == 0 && x % 5 == 0) console.log("fizz buzz");
  else if (x % 3 == 0) console.log("fizz");
  else if (x % 5 == 0) console.log("buzz");
  else console.log(x);
}
