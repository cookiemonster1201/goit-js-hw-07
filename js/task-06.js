const inputRef = document.querySelector("input#validation-input");
console.log(inputRef);

const onInputBlur = (event) => {
  if (
    event.currentTarget.value.length === +inputRef.getAttribute("data-length")
  ) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
};

const onInputFocus = (event) => {
  if (event.currentTarget.classList.contains("valid")) {
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
  }
};

inputRef.addEventListener("blur", onInputBlur);
inputRef.addEventListener("focus", onInputFocus);
