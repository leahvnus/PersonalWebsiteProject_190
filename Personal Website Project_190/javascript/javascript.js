// define variable
var index = 0;
var img = [
  "./picture/cat2.jpg",
  "./picture/cat3.jpg",
  "./picture/cat4.jpg",
  "./picture/cat5.jpg",
  "./picture/cat6.jpg",
  "./picture/cat7.jpg",
  "./picture/cat8.jpg",
  "./picture/cat9.jpg",
  "./picture/cat10.jpg",
  "./picture/cat11.jpg",
];
var slide = document.getElementById("slide");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

// Initial slide by getting from by tag id
slide.src = img[0];
btnPrevious.setAttribute("disabled", "true");
function slideNext() {
  index += 1;
  slide.src = img[index];
  if (index == img.length - 1)
    btnNext.setAttribute("disabled", "true");

  btnPrevious.removeAttribute("disabled");
}

function slidePrevious() {
  index -= 1;
  slide.src = img[index];
  // Add disabled attribute for slide button
  if (index <= 0)
    btnPrevious.setAttribute("disabled", "true");

  btnNext.removeAttribute("disabled");
}


function menuToggle() {
  var headerMenu = document.getElementById("header-menu");

  if (headerMenu.classList.contains("show")) {
    headerMenu.classList.remove("show")
    headerMenu.classList.add("hide")
  }
  else {
    headerMenu.classList.remove("hide")
    headerMenu.classList.add("show")
  }
}
