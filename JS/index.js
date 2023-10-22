function right_menu () {
    // menu = document.getElementsByClassName(right_n);
    const button = document.getElementById("menu_button");
    const menu = document.getElementById("right_n");
    
        menu.style.display = "block";
    button.style.display = "none";
    
}
function close_menu () {
    const menu = document.getElementById("right_n");
    const button = document.getElementById("menu_button");

    menu.classList.add ('right_n')

        menu.style.display = "none";
        button.style.display = "block";
    
    
}

// autotype
let w_counter = 0;
AutoType ("ola", "es una forma de estudio")
function startInterval() {
intervalId = setInterval(() => {
switch (w_counter) {
        case 0:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es una herramienta");}); break;
        case 1:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es un motor");}); break;
        case 2:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es una tecnologia");}); break;
        case 3:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es un metodo de enseñanza");}); break;
        case 4:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es entretenido");}); break;
        case 5:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es un nuevo metodo de aprender");}); break;
        case 6:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es la solucion para tus problemas informaticos");}); break;
        case 7:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es tu nueva mejor experiencia");}); break;
        case 8:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es la forma de adaptarte al presente y al futuro");}); break;
        case 9:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es tu mejor amigo en la tecnologia");}); break;
        case 10:
            AutoBackspace("ola", 50, () => {AutoType("ola", "Es tu forma aceptar el cambio");}); break;
    }
    if (w_counter < 10) w_counter++;
    if (w_counter == 10) w_counter = 0;
} , 6000);
}
function stopInterval() {
    clearInterval(intervalId);
}
document.addEventListener ('visibilitychange', function() {
   if (document.visibilityState ===  'hidden') {
    stopInterval();
   } else {
    startInterval();
   }
})
startInterval();

let image_standing = 0;
const carrusel = document.getElementById("carrusel_slider");
const carrusel_length = carrusel.children.length;
let imageContainers = document.getElementsByClassName("image-container");
console.log(carrusel_length);
document.addEventListener("DOMContentLoaded", function() {
    next_image();
});

function next_image() {
    image_standing++;
    if (image_standing > carrusel_length) image_standing = 1;
    console.log(image_standing);
    fadeOutAndChangeImage();
}

function prev_image() {
    image_standing--;
    if (image_standing < 1) image_standing = carrusel_length;
    console.log(image_standing);
    fadeOutAndChangeImage();
}

function fadeOutAndChangeImage() {
    let currentImageContainer = imageContainers[image_standing - 1];
    let previousImageContainer = document.querySelector(".image-container.active");

    if (previousImageContainer) {
        previousImageContainer.classList.remove("active");
    }

    currentImageContainer.style.animation = "opacity 1s ease-in-out"; // Aplicamos la animación de desvanecimiento
    currentImageContainer.classList.add("active"); // Mostramos el contenedor actual
}


function handleNavBackground() {
    const nav = document.getElementById('nav');
    const body = document.getElementById('body');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      nav.classList.add('nav-scrolled');
      body.classList.add('body-show');
    } else {
      nav.classList.remove('nav-scrolled');
      body.classList.remove('body-show');
    }
  }
  // Escuchar eventos de desplazamiento (scroll) para actualizar el fondo del menú de navegación
  window.addEventListener('scroll', handleNavBackground);