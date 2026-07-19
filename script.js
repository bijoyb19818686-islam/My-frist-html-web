const EDIT_MODE = true;

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const themeBtn = document.getElementById("themeBtn");

// Open & Close Sidebar
menuBtn.onclick = function () {
    sidebar.classList.toggle("active");
};

closeBtn.onclick = function () {
    sidebar.classList.remove("active");
};

// Click outside sidebar = Close
document.addEventListener("click", function (e) {
    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});

// Dark Mode
themeBtn.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.innerHTML = "☀️";
    } else {
        this.innerHTML = "🌙";
    }
};

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
}

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        this.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
};

const editBtn = document.getElementById("editPhotoBtn");

if (EDIT_MODE) {

    const password = prompt("Enter Admin Password");

    if (password === "BijoyP888") {
        editBtn.style.display = "inline-block";
    } else {
        alert("Wrong Password!");
    }

}
