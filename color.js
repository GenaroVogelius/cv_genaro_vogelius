// Cazamos al boton
let boton = document.getElementById("btn-color");
let A = sessionStorage.getItem("NowWhite");

// vemos en que sesion que color estamos:
if (A === "true") {
  cambiadorWhite();
}

// le decimos que cuando se haga click en el boton ejecute la función respuestaClick
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
  cambiador();
}

function cambiador() {
  try {
    cambiadorWhite();

    // si no es posible eliminar al link de styles con id black, porque supongo que el usuario esta con el link de styles en id white...

    //Ahora agarro ese error con catch y le digo que ejecute el siguiente codigo, similar al de arriba, unicamente que se borra al link de style con id white y se agrega el link de style con id black
  } catch {
    cambiadorBlack();
  }
}

function cambiadorWhite() {
  // cazamos al link style que tiene colores oscuros.
  let black = document.getElementById("black");
  //   eliminamos ese link style
  black.remove();
  // creamos una variable que contendrá un elemento html
  let white = document.createElement("link");
  // le decimos a la variable que elemento html contendrá
  white.innerHTML =
    '<link id="white" rel="stylesheet" href="css/styleJV.css"></link>';
  // agregamos ese elemento html que contiene los estilos blancos al head.
  document.head.append(white);
  boton.innerHTML = "white-mode on";
  sessionStorage.setItem("NowWhite", true);
}

function cambiadorBlack() {
  let white = document.getElementById("white");
  // white.remove();
  let black = document.createElement("link");
  black.innerHTML =
    '<link id="black" rel="stylesheet" href="css/style.css"></link>';
  document.head.append(black);
  boton.innerHTML = "dark-mode on";
  sessionStorage.setItem("NowWhite", false);
}

// aca le decimos que mientras se haga scroll de la pantalla que te ejecute la función scroll.
window.onscroll = function scroll() {
  // esto te pasa de pixeles a porcentaje
  // const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
  // const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
  // lo usamos para ver cuanto porcentaje era determinada cantidad de pixeles

  // esto te pasa de porcentaje a pixeles
  const totalScrollHeight = document.body.scrollHeight - window.innerHeight; //*document.body.scrollHeight returns the full height of the document, while window.innerHeight returns the height of the visible window.
  const desiredPercent = 14.44513329200248; //*este porcentaje es donde queremos que aparezca los iconos sociales.
  const desiredPixels = (desiredPercent / 100) * totalScrollHeight;
  // hacemos esta cuenta porque window.scrollY solo toma como elemento a pixeles.

  if (window.scrollY > desiredPixels) {
    document.getElementById("social").style.animation =
      "move-right 0.5s linear";
    document
      .getElementById("social")
      .addEventListener("animationend", ejeEstatico);
  }
  function ejeEstatico() {
    document.getElementById("social").style.transform = "translateX(0)";
  }

  if (
    window.scrollY < desiredPixels &&
    document.getElementById("social").style.transform === "translateX(0px)"
  ) {
    document.getElementById("social").style.animation = "move-left 0.5s linear";
    document
      .getElementById("social")
      .addEventListener("animationend", ejeNegativo);
  }

  function ejeNegativo() {
    document.getElementById("social").style.transform = "translateX(-200%)";
  }
};

// function scrollUp() {
//   document.getElementById("social").style.animation = "move-left 0.5s linear";
//   document
//     .getElementById("social")
//     .addEventListener("animationend", ejeNegativo);
// }

// function ejeNegativo() {
//   document.getElementById("social").style.transform = "translateX(-100%)";
//   window.onscroll = function right() {
//     if (window.scrollY > 370) {
//       gena();
//     }
//   };
// }
// evento de cuando se pone el mouse encima del boton.
// boton.addEventListener("mouseover", mouseOver);
// function mouseOver() {
//   let text = boton.innerHTML;
//   if (text === "dark-mode on") {
//     boton.innerHTML = "white-mode?";

//     // evento de cuando sacas el mouse del boton
//     boton.addEventListener("mouseout", mouseOut);
//     function mouseOut() {
//       if (text === "dark-mode on") {
//         boton.innerHTML = "dark-mode on";
//         console.log(text);
//       } else if (text == "white-mode on") {
//         boton.innerHTML = "white-mode on";
//       }
//     }
//   }
// }
//   if (text === "white-mode on") {
//     boton.innerHTML = "black-mode?";
//   }
// }
