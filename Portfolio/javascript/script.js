document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your message, " + contactForm.elements[0].value + "!");
        contactForm.reset();
    });

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});