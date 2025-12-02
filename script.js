// The constant variables for the script file
const openModal = document.getElementById("openModal");
const ctaSignup = document.getElementById("ctaSignup");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

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


