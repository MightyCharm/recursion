function fibs(value) {
  if (value === 0) return [];
  if (value === 1) return [0];

  const result = [0];
  let prev = 0;
  let curr = 1;

  while (result.length < value) {
    result.push(curr);
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return result;
}

function fibsRec(value) {
  if (value <= 0) return [];
  if (value === 1) return [0];
  if (value === 2) return [0, 1];

  const data = fibsRec(value - 1);
  return [...data, data[data.length - 1] + data[data.length - 2]];
}

console.log("Iterative Results:");
for (let i = 0; i <= 8; i++) {
  console.log(fibs(i));
}

console.log("Recursive Results:");
for (let i = 0; i <= 8; i++) {
  console.log(fibsRec(i));
}
