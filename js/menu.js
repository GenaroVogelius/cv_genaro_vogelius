const menuBtn = document.querySelector(".menu-btn");
const hamburguer = document.querySelector(".menu-btn__burguer");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburguer.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburguer.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}



const showBtns = document.querySelectorAll(".show-btn");
const arrayArrows = document.querySelectorAll(".show-btn__arrow");
const arrayCard = document.querySelectorAll(".card");
const arrayCardInside = document.querySelectorAll(".card-inside");
const arrayFeature = document.querySelectorAll(".features__feature");


// tenes esto de array.from porque showBtns te devuelve una NodeList que no es un array y map funciona con arrays
Array.from(showBtns).map((showBtn, index) => {
  showBtn.addEventListener("click", () => {
    toggleInfo(index, showBtn);
  });
});

//? si no queres usar Array.from podes hacer tambien:
// showBtns.forEach((showBtn, index) => {
//   showBtn.addEventListener("click", () => {
//     toggleInfo(index, showBtn);
//   });
// });
// ?forEach may be a more appropriate choice in this case because you're not actually returning a new array.


//? Esto no te funcionaria porque estas llamando al valor de retorno de la función toggleInfo de esta manera
// Array.from(showBtns).map((showBtn, index) => {
// showBtn.addEventListener("click", toggleInfo(index, showBtn)
// )});
// En cambio de la manera que lo pusiste lo que hace es ejecutar la función toggleInfo cuando se le hace un click

function toggleInfo(index, showBtn) {
  const arrows = arrayArrows[index];
  const card = arrayCard[index];
  const cardInside = arrayCardInside[index];
  const feature = arrayFeature[index]

  showBtn.classList.toggle("open");
  arrows.classList.toggle("open");
  card.classList.toggle("open");
  cardInside.classList.toggle("open");
  feature.classList.toggle("open")


  if (feature.classList.contains("open")) {
    cardInside.style.display = "flex";
        feature.style.animationName = "animation_feature_open";
    cardInside.style.animationName = "animation_card_inside_open";
    card.style.animationName = "none";

  }

  else {
    cardInside.style.animationName = "animation_card_inside_close";
    feature.style.animationName = "animation_feature_close";
    
    
    feature.addEventListener("animationend", (event) => {
      if (event.animationName === "animation_feature_close") {
        console.log("Hi")
        cardInside.style.display="none";
      }
    });
  }
}
    