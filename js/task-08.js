const refs = {
  input: document.querySelector("#controls input"),
  btnRender: document.querySelector("[data-action=render]"),
  btnDestroy: document.querySelector("[data-action=destroy]"),
  boxesCollection: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const getRandomColor = (min, max) =>
    Math.ceil(Math.random() * (max - min) + min);

  const boxesArr = [];
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const collectionListItem = document.createElement("li");
    const collectionBox = document.createElement("div");

    collectionListItem.style.listStyle = "none";
    collectionListItem.style.marginTop = "10px";
    collectionBox.style.backgroundColor = `rgb(${getRandomColor(
      0,
      255
    )}, ${getRandomColor(0, 255)}, ${getRandomColor(0, 255)})`;
    collectionBox.style.width = `${boxSize}px`;
    collectionBox.style.height = `${boxSize}px`;
    boxSize += 10;

    collectionListItem.appendChild(collectionBox);
    boxesArr.push(collectionListItem);
  }
  return boxesArr;
};

const onBtnRenderClick = () => {
  refs.boxesCollection.append(...createBoxes(refs.input.value));
};

const onBtnDestroyClick = () => {
  refs.boxesCollection.innerHTML = "";
};

refs.btnRender.addEventListener("click", onBtnRenderClick);
refs.btnDestroy.addEventListener("click", onBtnDestroyClick);
