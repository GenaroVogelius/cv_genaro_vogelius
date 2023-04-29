// Cazamos al boton
let boton = document.getElementById("btn-color");
let A = sessionStorage.getItem("NowWhite");
let B = document.getElementById("white");

// vemos en que sesion de color estamos:
if (A === "true") {
  B.disabled = false;
  boton.innerHTML = "white-mode on";
}

// le decimos que cuando se haga click en el boton ejecute la función respuestaClick
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
  if (B.disabled === true) {
    B.disabled = false;
    boton.innerHTML = "white-mode on";
    sessionStorage.setItem("NowWhite", true);
  } else if (B.disabled === false) {
    B.disabled = true;
    boton.innerHTML = "dark-mode on";
    sessionStorage.setItem("NowWhite", false);
  }
}
