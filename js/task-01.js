const categoriesListRef = document.querySelector("#categories");
const subcategoriesListRef = [...categoriesListRef.children];

const countCategories = (categoriesList) =>
  console.log(`В списке ${categoriesListRef.children.length} категории`);
countCategories(categoriesListRef);

const showSubcategoryDetails = (subcategoriesList) => {
  subcategoriesList.forEach((subCategory) => {
    let subCategoryTitleRef = subCategory.firstElementChild;
    console.log(
      `Категория: '${subCategoryTitleRef.textContent}'; Количество элементов: ${subCategoryTitleRef.nextElementSibling.childElementCount}`
    );
  });
};
showSubcategoryDetails(subcategoriesListRef);
