let burger = document.querySelector(".burger");
let nav = document.querySelector("header nav");
let span = document.querySelector("header + span");
burger.onclick = function () {
  nav.classList.toggle("show");
  span.style.display = "block";
  span.classList.remove("Dnone");
};

span.onclick = function () {
  nav.classList.remove("show");
  span.classList.add("Dnone");
};
