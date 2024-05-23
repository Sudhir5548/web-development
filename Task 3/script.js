document.addEventListener('DOMContentLoaded', function() {
    // Interactive Menu
    const navMenu = document.getElementById('navMenu');
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const links = navMenu.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove('active');
            }
            event.target.classList.add('active');
        }
    });

    // Dynamic Greeting
    function updateGreeting() {
        const greeting = document.getElementById('greeting');
        const hour = new Date().getHours();
        if (hour < 12) {
            greeting.textContent = 'Good Morning!';
        } else if (hour < 18) {
            greeting.textContent = 'Good Afternoon!';
        } else {
            greeting.textContent = 'Good Evening!';
        }
    }
    updateGreeting();

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        if (message.trim() === '') {
            alert('Please enter a message.');
            return;
        }

        alert('Form submitted successfully!');
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
