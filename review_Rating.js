// Rating functionality
const stars = document.querySelectorAll("#stars .star");
const ratingValue = document.querySelector("#rating-value");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = star.getAttribute("data-rating");
    if (star.style.color ==="red") {
      for (let index = parseInt(rating); index <= 5; index++) {
        stars[index].style.color = "black"
      }
    }else{
      for (let index = 0; index < parseInt(rating); index++) {
        stars[index].style.color = "red"
      }
    }
    ratingValue.textContent = `You rated it ${rating} stars`;
    stars.forEach((s) => s.classList.remove("rated"));
    star.classList.add("rated");
  });
});

// Review functionality
const reviewList = document.querySelector("#review-list");
const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#comment");
const submitReviewBtn = document.querySelector("#submit-review-btn");

submitReviewBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const comment = commentInput.value;
  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong>: ${comment}`;
  reviewList.appendChild(li);
  nameInput.value = "";
  commentInput.value = "";
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({ name, comment });
  localStorage.setItem("reviews", JSON.stringify(reviews));
});

// Submit functionality
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  if (rating > 0) {
    alert(`You submitted a ${rating}-star rating`);
    rating = 0;
    ratingValue.textContent = "";
    stars.forEach((s) => s.classList.remove("rated"));
  } else {
    alert("Please rate the product before submitting");
  }
});
window.addEventListener("load", () => {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach((review) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${review.name}</strong>: ${review.comment}`;
    reviewList.appendChild(li);
  });
});