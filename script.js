// ===============================
// Portfolio Script
// ===============================

// ---------- Gallery Lightbox ----------

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (galleryImages.length > 0) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

}

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


// ---------- Sidebar ----------

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}

if (closeBtn && sidebar) {

    closeBtn.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

}

document.addEventListener("click", (e) => {

    if (
        sidebar &&
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {

        sidebar.classList.remove("active");

    }

});


// ---------- Theme ----------

const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme){

    if(theme === "dark"){

        document.body.classList.add("dark");

        if(themeBtn){

            themeBtn.innerHTML = "☀️";

        }

    }else{

        document.body.classList.remove("dark");

        if(themeBtn){

            themeBtn.innerHTML = "🌙";

        }

    }

}

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    applyTheme(savedTheme);

}else{

    applyTheme(mediaQuery.matches ? "dark" : "light");

}

if(themeBtn){

    themeBtn.addEventListener("click", ()=>{

        const newTheme =
        document.body.classList.contains("dark")
        ? "light"
        : "dark";

        applyTheme(newTheme);

        localStorage.setItem("theme", newTheme);

    });

}

mediaQuery.addEventListener("change",(e)=>{

    if(!localStorage.getItem("theme")){

        applyTheme(e.matches ? "dark" : "light");

    }

});
