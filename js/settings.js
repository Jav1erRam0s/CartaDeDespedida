/* ************************************************** */

// Resta el header al momento de posicionarse sobre la seccion.
function scrollToSection(sectionId) {
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Altura del navbar
  const section = document.getElementById(sectionId);
  const sectionPosition = section.offsetTop - navbarHeight; // Posición de la sección menos la altura del navbar
  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
}

// Agregar un event listener para cada enlace del navbar
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const sectionId = this.getAttribute("href").substring(1); // Obtener el ID de la sección
    scrollToSection(sectionId); // Llamar a la función para desplazar a la sección
  });
});

/* ************************************************** */

// Cierra el navbar en aplicaciones mobiles
$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });

  var navbarBrand = $(".container-navbar-brand");
  navbarBrand.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});

/* ************************************************** */

// Setea el alto de los card loader musica

setMinHeightCardMusica();

function setMinHeightCardMusica() {
  var containersMusica = document.getElementsByClassName("loader-card-musica");
  var widthImage = containersMusica[0].offsetWidth;

  for (let index = 0; index < containersMusica.length; index++) {
    var tamanio = 40 + widthImage + 120 + 40; // 40 = card-nombre, dinamic = card-image, 120 = card-tracks, 40 = card-reproductor
    containersMusica[index].style.minHeight = tamanio + "px";
  }
}

// Redimensiona el alto de los card loader musica, cuando hay cambios en el tamaño de ventana.

window.addEventListener("resize", function (event) {
  setMinHeightCardMusica();
});
