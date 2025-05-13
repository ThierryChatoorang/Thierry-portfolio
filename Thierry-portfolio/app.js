/**
 * Enhanced Portfolio JavaScript
 * Adds smooth scrolling, active navigation highlighting, 
 * animations, and improved form handling
 */

document.addEventListener("DOMContentLoaded", () => {
    // ===== SELECTORS =====
    const contactForm = document.getElementById("contactForm");
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector(".header");
    
    // ===== SCROLL EFFECTS =====
    
    // Header shadow on scroll
    window.addEventListener("scroll", () => {
        // Add shadow to header when scrolled
        if (window.scrollY > 50) {
            header.classList.add("header-shadow");
        } else {
            header.classList.remove("header-shadow");
        }
        
        // Update active navigation link based on scroll position
        updateActiveNavOnScroll();
        
        // Reveal elements when they come into view
        revealOnScroll();
    });
    
    // Highlight active navigation item while scrolling
    function updateActiveNavOnScroll() {
        // Determine which section is currently in view
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });
        
        // Update active class on navigation items
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }
    
    // ===== ANIMATIONS =====
    
    // Add reveal class to elements when they come into view
    function revealOnScroll() {
        const revealElements = document.querySelectorAll(".service-card, .portfolio-gallery img, .about-content, .about-img");
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add("reveal");
            }
        });
    }
    
    // Add reveal class to all elements initially
    sections.forEach(section => {
        section.classList.add("fade-in");
    });
    
    // ===== SMOOTH SCROLLING =====
    
    // Smooth scroll when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Update active class
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            link.classList.add("active");
            
            // Scroll to target section
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header height
                behavior: "smooth"
            });
        });
    });
    
    // ===== FORM HANDLING =====
    
    // Enhanced contact form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const subject = contactForm.querySelector('input[name="subject"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
        // Basic form validation
        if (!name || !email || !subject || !message) {
            showFormMessage("Please fill in all fields", "error");
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            showFormMessage("Please enter a valid email address", "error");
            return;
        }
        
        // Simulate form submission (would be replaced by actual AJAX submission)
        // Show loading indicator
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        
        // Simulate network delay (would be replaced by actual form submission)
        setTimeout(() => {
            showFormMessage(`Thank you, ${name}! Your message has been sent.`, "success");
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.reset();
        }, 1500);
    });
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show form submission message
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.getElementById("formMessage");
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageElement = document.createElement("div");
        messageElement.id = "formMessage";
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        
        // Add message to the DOM
        contactForm.appendChild(messageElement);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.classList.add("fade-out");
            setTimeout(() => messageElement.remove(), 500);
        }, 5000);
    }
    
    // ===== TYPED TEXT EFFECT =====
    
    // Creating a simple typing effect for the role text
    const roleElement = document.querySelector(".home-content h3 span");
    const roles = ["Frontend Developer", "Web Designer", "coding enthousiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Deleting text
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Set typing speed
        let typingSpeed = isDeleting ? 80 : 150;
        
        // If completed typing current word
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            roleIndex++;
            // Reset to first word if we've gone through all words
            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
            // Pause before typing next word
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(typeEffect, 1000);
    
    // ===== INITIALIZE =====
    
    // Call this once to set initial states
    updateActiveNavOnScroll();
    revealOnScroll();
});