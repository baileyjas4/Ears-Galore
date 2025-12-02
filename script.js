// The constant variables for the script file
const openModal = document.getElementById("openModal");
const ctaSignup = document.getElementById("ctaSignup");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const themeToggle = document.getElementById("themeToggle");

// Opens modal for the hero button
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Opens modal for the CTA section
ctaSignup.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal (the X button)
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal by clicking outside the box
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


//The hamburger nav which will only be for mobile view
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open"); 
    hamburger.classList.toggle("active");
});


//Light and Dark mode functionality

//Will keep the them how it was when you previously visited
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "light");
    }
});

