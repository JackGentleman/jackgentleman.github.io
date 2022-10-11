const btn1 = document.getElementById("bg-button");
btn1.addEventListener("click", function onclick(event) {
    document.body.style.backgroundColor = 'yellow';
});

const btn2 = document.getElementById("hide-nav");
btn2.addEventListener("click", function onclick(event) {
    document.getElementById("nav-bar").style.display = "none";
});