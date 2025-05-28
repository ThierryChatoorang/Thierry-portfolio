document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    //  Contactformulier verzenden met animatie op knop
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('input[name="name"]');
            const userName = nameInput ? nameInput.value.trim() : "bezoeker";

            // Knop kort laten 'pulseren' als visuele feedback
            const submitButton = form.querySelector("button[type='submit']");
            submitButton.classList.add("clicked");
            setTimeout(() => submitButton.classList.remove("clicked"), 300);

            alert(`Bedankt voor je bericht, ${userName}!`);
            form.reset();
        });
    }

// 🎨 Simpele kleurwisseling voor meerdere elementen
document.addEventListener("DOMContentLoaded", () => {
  // Selecteer alle elementen met class .color-cycle
  const elements = document.querySelectorAll(".color-cycle");

  // Array met kleuren waar we tussen wisselen
  const colors = ["#0ff", "#00ffee", "#39f", "#1ecbe1"];
  let i = 0;

  // Wissel elke seconde van kleur
  setInterval(() => {
    elements.forEach(el => {
      el.style.color = colors[i];
    });
    i = (i + 1) % colors.length; // Zorg dat i opnieuw begint na laatste kleur
  }, 1000); // 1000ms = 1 seconde
});

    // 📱 Mobiele navigatie toggle
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }
});