// Merge sort (recursive split + iterative merge)
function mergeSort(data) {
  if (data.length <= 1) {
    return data;
  }
  let middle = Math.floor(data.length / 2);
  let first = mergeSort(data.slice(0, middle));
  let second = mergeSort(data.slice(middle));

  let i = 0;
  let j = 0;
  let temp = [];

  while (i < first.length && j < second.length) {
    const a = first[i];
    const b = second[j];
    if (a < b) {
      temp.push(a);
      i++;
    } else {
      temp.push(b);
      j++;
    }
  }
  for (i; i < first.length; i++) {
    temp.push(first[i]);
  }
  for (j; j < second.length; j++) {
    temp.push(second[j]);
  }
  return temp;
}

const tests = [
  [],
  [73],
  [1, 2, 3, 4, 5],
  [3, 2, 1, 13, 8, 5, 0, 1],
  [105, 79, 100, 110],
];

for (const test of tests) {
  console.log(mergeSort(test));
}
