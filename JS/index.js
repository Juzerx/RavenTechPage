
function nav_menu() {
    document.getElementById("nav").styles.display = "none";
    
    console.log("clicked");
}

let w_counter = 0;
const interval = setInterval(change_w , 4000, w_counter++);
function change_w (w_counter) {
    switch (w_counter) {
        case 0:
            AutoType("ola", "welcome");
            AutoBackspace("ola", 20);
            console.log(w_counter);
        case 1:
            AutoType("ola", "how i can help u?");
            AutoBackspace("ola", 50);
            console.log(w_counter);
    }
}