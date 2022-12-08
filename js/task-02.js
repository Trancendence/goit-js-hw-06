const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridient = document.createElement("li");
const text = ingridient.textContent = ingredients;
ingridient.classList.add("item");
console.log(ingridient)
// const text = document.querySelector("#ingridients");
// text.textContent = `ingredients`;


// text.classList.add("item");

// document.createElement(ingridient)

