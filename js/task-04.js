let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = document.getElementById("value");
let counterValue = 0;

plus.onclick = function() {
counterValue++;
count.innerHTML = counterValue;
};

minus.onclick = function() {
counterValue--;
count.innerHTML = counterValue;
};