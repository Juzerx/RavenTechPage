
function nav_menu() {
    document.getElementById("nav").styles.display = "none";
    
    console.log("clicked");
}

let w_counter = 0;
AutoType ("ola", "es una forma de estudio")
setInterval(() => {
switch (w_counter) {
        case 0:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es una herramienta");}); break;
        case 1:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es un motor");}); break;
        case 2:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es una tecnologia");}); break;
        case 3:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es un metodo de enseñansa");}); break;
        case 4:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es entretenido");}); break;
        case 5:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es un nuevo metodo de aprender");}); break;
        case 6:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es la solucion para tus problemas informaticos");}); break;
        case 7:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es tu nueva mejor experiencia");}); break;
        case 8:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es la forma de adaptarte al presente y al futuro");}); break;
        case 9:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es tu mejor amigo en la tecnologia");}); break;
        case 10:
            AutoBackspace("ola", 50, () => {AutoType("ola", "es tu forma aceptar el cambio");}); break;
    }
    if (w_counter < 10) w_counter++;
    if (w_counter == 10) w_counter = 0;
} , 5000);