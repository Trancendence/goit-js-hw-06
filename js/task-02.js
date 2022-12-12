const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ulEl = document.querySelector('#ingredients');
// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// ulEl.innerHTML = list;


const list = arrayOfItems => {

  ingredientsRef.append(
    ...arrayOfItems.map(itemName => {
      const li = document.createElement('li');
      li.textContent = itemName;
      return li;
    }),
  );
};
const ingredientsRef = document.querySelector('ul#ingredients');

list(ingredients);