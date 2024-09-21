// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);

        // Scroll behavior
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optionally: You can add more interactivity like animations or popups
// You can also create a toggle for mobile navigation if required
// Add interactivity here if needed
