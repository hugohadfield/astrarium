// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: You can add more interactivity here, like animated star background effects.
// Canvas setup for the starry background
// Canvas setup for the starry background
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(); // Recreate stars when window size changes
});

const stars = [];
const starCount = 200; // Number of stars

function createStars() {
    stars.length = 0; // Clear stars array
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
}

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5;
        this.opacity = Math.random();
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        // Random twinkling effect
        this.opacity += (Math.random() * 0.02) * this.twinkleDirection;
        if (this.opacity <= 0) {
            this.opacity = 0.1;
            this.twinkleDirection = 1;
        } else if (this.opacity >= 1) {
            this.opacity = 1;
            this.twinkleDirection = -1;
        }

        // Slightly moving the star position to simulate drifting
        this.x += Math.random() * 0.2 - 0.1;
        this.y += Math.random() * 0.2 - 0.1;

        // Redraw the star at the new position
        this.draw();
    }
}

// Animation loop to keep drawing stars
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
    }

    requestAnimationFrame(animateStars);
}

// Create stars and start animation
createStars();
animateStars();


EventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

});
