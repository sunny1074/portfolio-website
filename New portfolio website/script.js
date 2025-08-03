document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-in-out'
        });
    }
    
    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    
    // More functionality: Typed.js initialization, mobile navigation,
    // project filtering, scroll effects, form validation, etc.
});
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
