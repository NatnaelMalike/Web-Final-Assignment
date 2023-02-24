let y = document.querySelector(".display-catagory-area")
function showDiv(text) {
  
  var x = document.querySelector(text);
  if (x.style.display === "none") {
    x.style.display = "grid";
    y.style.display = "block"
  } else {
    x.style.display = "none";
  }
}
const books = [
  { title: 'cocktail', author: 'Div to be Displayed' },
  { title: 'chips and dips', author: 'Div to be Displayed' },
  { title: 'banoffe cake', author: 'Div to be Displayed' },
  { title: 'chicken', author: 'Div to be Displayed' },
  { title: 'steak', author: 'Div to be Displayed' },
  { title: 'fish', author: 'Div to be Displayed' },
  { title: 'shrimp with pasta', author: 'Div to be Displayed' },
  { title: 'shekla tebs', author: 'Div to be Displayed' },
  { title: 'tej', author: 'Div to be Displayed' },
  { title: 'areke', author: 'Div to be Displayed' },
  { title: 'white muffins', author: 'Div to be Displayed' },
  { title: 'black forest', author: 'Div to be Displayed' },
  { title: 'chocolate cupcake', author: 'Div to be Displayed' },
  { title: 'soup', author: 'Div to be Displayed' },
  { title: 'chicken salad', author: 'Div to be Displayed' },
  { title: 'doro wet', author: 'Div to be Displayed' }
];
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const msg = document.getElementById('head')
searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  for (const iterator of books) {
    if (iterator.title.toLowerCase() === searchTerm.toLowerCase()) {
      msg.textContent = iterator.author
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
