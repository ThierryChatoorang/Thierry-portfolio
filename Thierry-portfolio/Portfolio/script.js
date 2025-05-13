document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    // Contact form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        alert(`Thank you for your message, ${name}!`);
        contactForm.reset();
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});