const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const list = document.querySelector("#ingredients");
// const ingridient = document.createElement(`li`);
// ingridient.textContent = ingredients;
// ingridient.classList.add("item");
// list.append(ingridient);

const ulEl = document.querySelector('#ingredients');
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
ulEl.innerHTML = list;