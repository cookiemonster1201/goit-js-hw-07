const fontSizeControlRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

const onFontSizeControlInput = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlRef.addEventListener("input", onFontSizeControlInput);
