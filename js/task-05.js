const refs = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};

const onNameInputChange = () => {
  refs.output.textContent =
    event.currentTarget.value.length === 0
      ? "незнакомец"
      : event.currentTarget.value;
};

refs.input.addEventListener("input", onNameInputChange);
