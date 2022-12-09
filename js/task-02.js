const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
const ingridient = document.createElement(`li`);
ingridient.textContent = ingredients;
ingridient.classList.add("item");
list.append(ingridient);



