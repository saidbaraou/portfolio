// Footer Date //
const annee = new Date();

document.querySelector("#annee").innerHTML = annee.getFullYear();
////////////////

//Navigation indicator //////////

const aboutItem = document.querySelector(".about-item");
const projectsItem = document.querySelector(".projects-item");



let aboutSection = document.querySelector(".about");
let projectsSection = document.querySelector(".projects");



let aboutPos = aboutSection.getBoundingClientRect().top;
let projectsPos = projectsSection.getBoundingClientRect().top;



document.addEventListener("touchmove", function () {
  if (aboutPos <= scrollPos) {
    aboutItem.classList.add("active"),
      projectsItem.classList.remove("active")
  } else if (aboutPos >= scrollPos) {
    aboutItem.classList.remove("active");
  }

  if (projectsPos <= scrollPos + 300) {
    aboutItem.classList.remove("active"),
      projectsItem.classList.add("active")
  }
});

window.addEventListener("scroll", function () {
  let scrollPos = this.scrollY;

  if (aboutPos <= scrollPos) {
    aboutItem.classList.add("active"),
      projectsItem.classList.remove("active")
  } else if (aboutPos >= scrollPos) {
    aboutItem.classList.remove("active");
  }

  if (projectsPos <= scrollPos + 300) {
    aboutItem.classList.remove("active"),
      projectsItem.classList.add("active")
  }

});

function toggleActive(e) {
  e.classList.add('active');
}

aboutItem.addEventListener("click", toggleActive);

/////////////////////////////

//Go top function//////////////////

let arrowGoTop = document.querySelector(".go-top");
arrowGoTop.style.opacity = 0;
window.onscroll = function () {
  showHideFn();
};

function showHideFn() {
  arrowGoTop.style.transition = "opacity 0.2s ease";
  if (
    document.documentElement.scrollTop > 500 ||
    document.body.scrollTop > 500
  ) {
    arrowGoTop.style.opacity = 1;
  } else {
    arrowGoTop.style.opacity = 0;
  }
}

function goTop() {
  //Safari
  document.body.scrollTop = 0;
  //Other Browsers
  document.documentElement.scrollTop = 0;
  aboutItem.classList.remove("active");
  projectsItem.classList.remove("active");

}

arrowGoTop.addEventListener("click", goTop);

//////// MOBILE MENU ////////////////////////////////

const mobileMenu = document.querySelector('.mobile-menu');



mobileMenu.addEventListener('click', toggleMenu);