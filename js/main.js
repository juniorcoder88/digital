let btn = document.querySelector("header .container button");
let ul = document.querySelector("ul");
btn.onclick = function () {
  ul.classList.toggle("active");
};
ul.onclick = function () {
  ul.classList.toggle("active");
};
