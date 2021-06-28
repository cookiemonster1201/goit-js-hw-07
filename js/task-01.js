const categoriesListRef = document.querySelector("#categories");
const subcategoriesListRef = document.querySelectorAll(".item");

const countCategories = (categoriesList) =>
  console.log(`В списке ${categoriesListRef.childElementCount} категории`);
countCategories(categoriesListRef);

const showSubcategoryDetails = (subcategoriesList) => {
  subcategoriesList.forEach((subCategory) => {
    let titleRef = subCategory.firstElementChild;
    console.log(
      `Категория: '${titleRef.textContent}'; Количество элементов: ${titleRef.nextElementSibling.childElementCount}`
    );
  });
};
showSubcategoryDetails(subcategoriesListRef);
