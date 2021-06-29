const counterValueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector("[data-action=increment]");
const btnDecrementRef = document.querySelector("[data-action=decrement]");
let counterValue = 0;

const onIncrementBtnClick = () => {
  counterValueRef.textContent = ++counterValue;
};
const onDecrementBtnClick = () => {
  counterValueRef.textContent = --counterValue;
};

btnIncrementRef.addEventListener("click", onIncrementBtnClick);
btnDecrementRef.addEventListener("click", onDecrementBtnClick);
