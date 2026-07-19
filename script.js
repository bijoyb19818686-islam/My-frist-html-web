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

/* ---------- Dark Mode ---------- */

// Load Saved Theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";

}

// Toggle Theme
themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","dark");

    }else{

        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","light");

    }

});
