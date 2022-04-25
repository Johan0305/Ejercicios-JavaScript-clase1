let likes = (num) => {
  let arrNum = String(num).split("");

  for (i = 4; i < 10; i++) {
    if (arrNum.length < i) {
      return arrNum.join("");
    } else if (arrNum.length < 5) {
      let k = arrNum.slice(0, 1);
      return `${k}K`;
    } else if (arrNum.length < 6) {
      let k = arrNum.slice(0, 2).join("");
      return `${k}K`;
    } else if (arrNum.length < 7) {
      let k = arrNum.slice(0, 3).join("");
      return `${k}K`;
    } else if (arrNum.length < 8) {
      let m = arrNum.slice(0, 1).join("");
      return `${m}M`;
    } else if (arrNum.length < 9) {
      let m = arrNum.slice(0, 2).join("");
      return `${m}M`;
    }
  }
};

likes(25321900);
