const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("ul#ingredients");

const makeIngredientsList = (ingredientsArr) => {
  return ingredientsArr.map((ingredient) => {
    const ingredientRef = document.createElement("li");
    ingredientRef.classList.add("ingredients__item");
    ingredientRef.textContent = ingredient;
    return ingredientRef;
  });
};

ingredientsListRef.append(...makeIngredientsList(ingredients));
