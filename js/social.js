// aca le decimos que mientras se haga scroll de la pantalla que te ejecute la función scroll.
window.onscroll = function scrollSocial() {
  // esto te pasa de pixeles a porcentaje
  // const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
  // const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
  // lo usamos para ver cuanto porcentaje era determinada cantidad de pixeles

  // esto te pasa de porcentaje a pixeles
  const totalScrollHeight = document.body.scrollHeight - window.innerHeight; //*document.body.scrollHeight returns the full height of the document, while window.innerHeight returns the height of the visible window.
  const desiredPercent = 14.44513329200248; //*este porcentaje es donde queremos que aparezca los iconos sociales.
  const desiredPixels = (desiredPercent / 100) * totalScrollHeight;
  // hacemos esta cuenta porque window.scrollY solo toma como unidad de medida pixeles.
  // document.body.offsetHeight es la altura total del documento.

  if (window.scrollY > desiredPixels) {
    document.getElementById("social").style.animation = "move-right";
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
    document.getElementById("social").style.animation = "move-left";
    document
      .getElementById("social")
      .addEventListener("animationend", ejeNegativo);
  }

  function ejeNegativo() {
    document.getElementById("social").style.transform = "translateX(-200%)";
  }
};
