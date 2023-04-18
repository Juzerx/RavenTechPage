
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
            AutoBackspace("ola", 50, () => {AutoType("ola", "es un motor");}); break;
    }
    if (w_counter < 10) w_counter++;
    if (w_counter == 10) w_counter = 0;
} , 5000);