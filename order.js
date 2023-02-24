function showDiv(text) {
  var x = document.querySelector(text);
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}
const books = [
  { title: 'the', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
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
