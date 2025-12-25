const main = document.getElementsByTagName("MAIN")[0];
const color = ["blue", "red", "orange", "green"];
const colorArray = [];
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
const createColorArray = () => {
  for (let i = 0; i < 6; i++) {
    colorArray.push(...shuffleColor());
  }
};

const createCards = () => {
  createColorArray();
  for (let i = 0; i < 24; i++) {
    const div = document.createElement("div");
    div.classList.add(color[colorArray[i]]);
    div.classList.add("card");
    main.appendChild(div);
  }
};
createCards();
