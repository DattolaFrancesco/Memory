const main = document.getElementsByTagName("MAIN")[0];
const color = ["blue", "red", "orange", "green"];
const colorArray = [];
const cardsPicked = [];
const divArray = [];
let click = 0;
const shuffleColor = (n) => {
  let usedNumber = [];
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * n);
    while (usedNumber.some((e) => e === num)) {
      num = Math.floor(Math.random() * n);
    }
    usedNumber.push(num);
  }
  return usedNumber;
};
const createColorArray = () => {
  for (let i = 0; i < 6; i++) {
    colorArray.push(...shuffleColor(4));
  }
};

const createCards = () => {
  createColorArray();
  for (let i = 0; i < 24; i++) {
    const div = document.createElement("div");
    div.classList.add(color[colorArray[i]]);
    div.classList.add("white");
    div.classList.add("card");
    main.appendChild(div);
    divArray.push(div);
    div.addEventListener("click", (e) => {
      e.target.classList.remove("white");
      cardsPicked.push(e.target);
      click++;
      check();
      if (divArray.every((e) => !e.classList.contains("white"))) {
        divArray.forEach((e) => e.classList.add("hide"));
        const h1 = document.createElement("h1");
        h1.innerText = "HAI VINTO";
        main.appendChild(h1);
      }
    });
  }
  console.log(divArray);
};

const check = () => {
  if (click === 2) {
    click = 0;
    if (!(cardsPicked[0].className.trim() == cardsPicked[1].className.trim())) {
      const timeOut = setInterval(() => {
        cardsPicked[0].classList.add("white");
        cardsPicked[1].classList.add("white");
        cardsPicked.splice(0, 2);
        clearInterval(timeOut);
      }, 500);
    } else {
      cardsPicked[0].classList.add("rightSet");
      cardsPicked[1].classList.add("rightSet");
      const cardRevealed = setInterval(() => {
        cardsPicked[0].classList.add("opacity");
        cardsPicked[1].classList.add("opacity");
        cardsPicked.splice(0, 2);
        clearInterval(cardRevealed);
      }, 500);
    }
  }
};
