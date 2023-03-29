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
foodCont.style.background = "gray"
  }
const Dishes = [
  //Appetizers
  { title: 'fried oysters', price: '540.00ETB', image: "/IMAGE/Appetizer/fried oysters.jpg" },
  { title: 'skillet taco dip', price: '445.00ETB', image: "/IMAGE/Appetizer/skillet taco dip.jpg" },
  { title: 'sausage rolls', price: '280.00ETB',image: "/IMAGE/Appetizer/Sausage Rolls.jpg" },
  { title: 'cheese ball', price: '370.00ETB',image: "/IMAGE/Appetizer/Cheese Ball.jpg" },
  { title: 'smoked salmon potato', price: '423.00ETB',image: "/IMAGE/Appetizer/Smoked Salmon Potato.jpg" },
  //Desserts
  { title: 'Chocolate Cake', price: '470.00ETB' ,image:"/IMAGE/Dessert/Chocolate Cake.jpg"},
  { title: 'Lemon Lush', price: '330.00ETB' ,image:"/IMAGE/Dessert/Lemon Lush.jpg"},
  { title: 'Pumpkin Bars', price: '502.00ETB' ,image:"/IMAGE/Dessert/Pumpkin Bars.jpg"},
  { title: 'Apple Chess Pie', price: '391.00ETB' ,image:"/IMAGE/Dessert/Apple Chess Pie.jpg"},
  { title: 'Grapefruit Pavlova', price: '354.00ETB' ,image:"/IMAGE/Dessert/Grapefruit Pavlova.jpg"},
  //MainDishes
  { title: 'Pork Rindss', price: '550.00ETB' ,image:"/IMAGE/Main Dishes/Pork Rinds.jpg"},
  { title: 'Roast Chicken', price: '885.00ETB' ,image:"/IMAGE/Main Dishes/Roast Chicken.jpg"},
  { title: 'Ribs', price: '590.00ETB',image:"/IMAGE/Main Dishes/Ribs.jpg"},
  { title: 'Lasagna', price: '500.00ETB' ,image:"/IMAGE/Main Dishes/Lasagna.jpg"},
  { title: 'Pork Chops', price: '860.00ETB' ,image:"/IMAGE/Main Dishes/Pork Chops.jpg"},
  //traditional
  { title: 'doro wet', price: '869.00ETB' ,image:"/IMAGE/Traditional/doro wet.jpg"},
  { title: 'shekla tibs', price: '760.00ETB' ,image:"/IMAGE/Traditional/shekla tibs.jpg"},
  { title: 'beye aynet', price: '220.00ETB',image: "/IMAGE/Traditional/beye aynet.jpg"},
  { title: 'shiro', price: '270.00ETB' ,image:"/IMAGE/Traditional/shiro wet.jpg"},
  { title: 'kitfo', price: '690.00ETB',image: "/IMAGE/Traditional/kitfo.jpg"},
  { title: 'kurt', price: '660.00ETB' ,image:"/IMAGE/Traditional/kurt.jpg"},
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
      newFood.innerHTML =  `<div class="image"><img src=${iterator.image}></div><div class="content"><h3>${iterator.title}</h3><p class="price">${iterator.price}</p><button class="btn-dish" >Add to Cart</button></div></div>`
      parent.appendChild(newFood)
    }
  }
});

