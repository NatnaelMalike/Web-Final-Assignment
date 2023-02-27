function showDiv(text) {
  var x = document.querySelector(text);
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}
function addFood(selector,image,price,title){
  const foodEl  = document.querySelector(selector)
  const foodCont = document.querySelector('.ordered-dishes')
  foodCont.innerHTML +=`<div class="box-dish"><div class="image"><img src=${image}></div><div class="content addi"><h3>${title}</h3><p class="price">${price}</p></div></div></div>`

  }

  

const Dishes = [
  //Appetizers
  { title: 'fried oysters', price: '540.00ETB', image: 'fried oysters.jpg' },
  { title: 'skillet taco dip', price: '445.00ETB', image: 'skillet taco dip.jpg' },
  { title: 'sausage rolls', price: '280.00ETB',image: 'Sausage Rolls.jpg' },
  { title: 'cheese ball', price: '370.00ETB',image: 'Cheese Ball.jpg' },
  { title: 'smoked salmon potato', price: '423.00ETB',image: 'Smoked Salmon Potato.jpg' },
  //Desserts
  { title: 'Chocolate Cake', price: '470.00ETB' },
  { title: 'Lemon Lush', price: '330.00ETB' },
  { title: 'Pumpkin Bars', price: '502.00ETB' },
  { title: 'Apple Chess Pie', price: '391.00ETB' },
  { title: 'Grapefruit Pavlova', price: '354.00ETB' },
  //MainDishes
  { title: 'Pork Rindss', price: '550.00ETB' },
  { title: 'Roast Chicken', price: '885.00ETB' },
  { title: 'Ribs', price: '590.00ETB' },
  { title: 'Lasagna', price: '500.00ETB' },
  { title: 'Pork Chops', price: '860.00ETB' },
  //traditional
  { title: 'doro wet', price: '869.00ETB' },
  { title: 'shekla tibs', price: '760.00ETB' },
  { title: 'beye aynet', price: '220.00ETB' },
  { title: 'shiro', price: '270.00ETB' },
  { title: 'kitfo', price: '690.00ETB' },
  { title: 'kurt', price: '660.00ETB' },
  //drinks
  { title: 'wine', price: '250.00ETB', image: "/IMAGE/Drinks/wine.png"},
  { title: 'soft drink', price: '50.00ETB', image: "/IMAGE/Drinks/soft drink.jpg" },
  { title: 'beer', price: '70.00ETB', image: "/IMAGE/Drinks/beer.jpg" },
  { title: 'water', price: '50.00ETB', image: "/IMAGE/Drinks/water.png" },
  { title: 'machiato', price: '75.00ETB', image: "/IMAGE/Drinks/machiato.jpg" },
  { title: 'coffee', price: '65.00ETB', image: "/IMAGE/Drinks/coffee.jpg" },
];
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const msg = document.querySelector('#ordered')
const newFood = document.createElement("div")
//const parent = document.getElementById("disp-search")
newFood.classList.add('box-dish')
searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  const parent = document.getElementById("disp-search")
  for (const iterator of Dishes) {
    if (iterator.title.toLowerCase() === searchTerm.toLowerCase()) {
      newFood.innerHTML =  `<div class="image"><img src=${iterator.image}></div><div class="content"><h3>${iterator.title}</h3><p class="price">${iterator.price}</p><button class="btn-dish">Add to Cart</button></div></div>`
      parent.appendChild(newFood)
    }
  }
});
const form = document.querySelector('#myForm');
form.addEventListener('submit', function() {  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const number = document.querySelector('#phoneNumber').value;
  const city = document.querySelector('#city').value;
  const woreda = document.querySelector('#state').value;
  const home = document.querySelector('#Street').value;
  const comment = document.querySelector('#comment').value;
  const payment = document.querySelector('input[name="pay"]:checked').value;
  const formData = {name: name,email: email,number: number,city: city,woreda: woreda,home: home,comment: comment,payment: payment}
  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data saved!');
});
function sum(){

}