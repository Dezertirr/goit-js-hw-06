const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

const ingredientsList = document.getElementById('ingredients')

for (const ingridient of ingredients) {
  const byLi = document.createElement('li');
  byLi.classList.add('item');
  byLi.textContent = ingridient;
  ingredientsList.append(byLi)
}