document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Form Validation (Simple)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully.');
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });
});

// Security: Prevent Right Click and Inspector Shortcuts
// Right click prevention
document.addEventListener('contextmenu', event => event.preventDefault());

// Keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+U) prevention
document.onkeydown = function (e) {
    if (e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
}
