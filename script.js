const wrapper = document.querySelector(".wrapper");
const para = document.querySelector("p");

wrapper.addEventListener("change", function (e) {
  if (e.target.checked) {
    para.classList.add("morning");
    para.textContent = "Morning, Sunshine!";
  } else {
    para.classList.remove("morning");
    para.textContent = "Good Night!";
  }
});
