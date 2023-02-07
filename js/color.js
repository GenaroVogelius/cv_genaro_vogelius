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
