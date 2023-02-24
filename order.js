function showDiv(text) {
  var x = document.querySelector(text);
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}
const books = [
  { title: 'cocktail', author: 'F. Scott Fitzgerald' },
  { title: 'chips and dips', author: 'Harper Lee' },
  { title: 'banoffe cake', author: 'George Orwell' },
  { title: 'chicken', author: 'Jane Austen' },
  { title: 'steak', author: 'J.D. Salinger' },
  { title: 'fish', author: 'F. Scott Fitzgerald' },
  { title: 'shrimp with pasta', author: 'Harper Lee' },
  { title: 'shekla tebs', author: 'George Orwell' },
  { title: 'tej', author: 'Jane Austen' },
  { title: 'areke', author: 'J.D. Salinger' },
  { title: 'white muffins', author: 'F. Scott Fitzgerald' },
  { title: 'black forest', author: 'Harper Lee' },
  { title: 'chocolate cupcake', author: 'George Orwell' },
  { title: 'soup', author: 'Jane Austen' },
  { title: 'chicken salad', author: 'J.D. Salinger' },
  { title: 'doro wet', author: 'J.D. Salinger' }
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
