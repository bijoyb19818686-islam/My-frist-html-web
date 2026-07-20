const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const themeBtn = document.getElementById("themeBtn");

/* ---------- Sidebar ---------- */

// Open / Close
menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

// Close Button
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
});

// Click Outside = Close
document.addEventListener("click", function (e) {

    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }

});

/* ---------- Theme System ---------- */

const themeBtn = document.getElementById("themeBtn");

// Apply Theme
function applyTheme(theme){

    if(theme === "dark"){

        document.body.classList.add("dark");
        themeBtn.innerHTML = "☀️";

    }else{

        document.body.classList.remove("dark");
        themeBtn.innerHTML = "🌙";

    }

}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const savedTheme = localStorage.getItem("theme");

// First Load
if(savedTheme){

    applyTheme(savedTheme);

}else{

    applyTheme(mediaQuery.matches ? "dark" : "light");

}

// Button Click
themeBtn.addEventListener("click", function(){

    const newTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);

});

// Auto Follow System Theme
mediaQuery.addEventListener("change", function(e){

    // Only follow system if user has not chosen manually
    if(!localStorage.getItem("theme")){

        applyTheme(e.matches ? "dark" : "light");

    }

});
