const shuffleColor = () => {
  let usedNumber = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 4);
    while (usedNumber.some((e) => e === num)) {
      num = Math.floor(Math.random() * 4);
    }
    usedNumber.push(num);
  }
  return usedNumber;
};
console.log(shuffleColor());
