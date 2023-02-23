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