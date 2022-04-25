let numPasos = (num) => {
  let count = 0;
  let nume = num;
  while (nume !== 0) {
    if (nume % 2 === 0) {
      nume = nume / 2;
      count++;
    } else {
      nume = nume - 1;
      count++;
    }
  }
  return count;
};
numPasos(10);
