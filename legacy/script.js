// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypewriter();
    initScrollAnimations();
    initSkillBars();
    initStatCounters();
    initContactForm();
    initParallax();
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// TYPEWRITER EFFECT
// ========================================
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const roles = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Creative Coder',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger skill bar animations when visible
                if (entry.target.closest('.skills-section')) {
                    animateSkillBars();
                }
                
                // Trigger stat counters when visible
                if (entry.target.closest('.about-section')) {
                    animateStatCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-up class
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
let skillBarsAnimated = false;

function initSkillBars() {
    // Initial setup - do not animate yet
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBars() {
    if (skillBarsAnimated) return;
    
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, index * 100);
    });
    
    skillBarsAnimated = true;
}

// ========================================
// STAT COUNTERS ANIMATION
// ========================================
let statCountersAnimated = false;

function initStatCounters() {
    // Initial setup
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        stat.textContent = '0';
    });
}

function animateStatCounters() {
    if (statCountersAnimated) return;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
    
    statCountersAnimated = true;
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Ripple effect on submit button
        const submitBtn = form.querySelector('.btn-submit');
        createRipple(e, submitBtn);
        
        // Simulate form submission
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
            form.reset();
        }, 600);
    });
    
    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            createRipple(e, button);
        });
    });
}

function createRipple(event, button) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    ripple.classList.add('animate');
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ========================================
// PARALLAX SCROLLING
// ========================================
function initParallax() {
    const projectCards = document.querySelectorAll('.project-card');
    
    window.addEventListener('scroll', () => {
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardHeight = card.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight && cardTop > -cardHeight) {
                const scrollProgress = (windowHeight - cardTop) / (windowHeight + cardHeight);
                const translateY = (scrollProgress - 0.5) * 20;
                
                const image = card.querySelector('.project-image');
                if (image) {
                    image.style.transform = `translateY(${translateY}px) scale(1)`;
                }
            }
        });
    });
}

// ========================================
// SMOOTH SCROLL ENHANCEMENT
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// DYNAMIC BUTTON INTERACTIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add hover glow effect to project buttons
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add scale effect to all interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .social-link, .tag');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
    });
});

// ========================================
// ENHANCED CARD INTERACTIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});

// ========================================
// LOADING ANIMATION
// ========================================
window.addEventListener('load', () => {
    // Trigger initial animations
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to parallax effect
const throttledParallax = throttle(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight && cardTop > -cardHeight) {
            const scrollProgress = (windowHeight - cardTop) / (windowHeight + cardHeight);
            const translateY = (scrollProgress - 0.5) * 20;
            
            const image = card.querySelector('.project-image');
            if (image && !card.matches(':hover')) {
                image.style.transform = `translateY(${translateY}px)`;
            }
        }
    });
}, 16);

window.addEventListener('scroll', throttledParallax);

// ========================================
// FLOATING LABEL ENHANCEMENT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Check if input has value on load
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // Add class on input
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
});

// ========================================
// TAG ANIMATION ON HOVER
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            // Pause the float animation on hover
            this.style.animationPlayState = 'paused';
        });
        
        tag.addEventListener('mouseleave', function() {
            // Resume the float animation
            this.style.animationPlayState = 'running';
        });
    });
});

// ========================================
// PREVENT DEFAULT LINK BEHAVIOR FOR DEMO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const demoLinks = document.querySelectorAll('.project-btn, .social-link');
    
    demoLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // You can add custom behavior here
                console.log('Link clicked:', link.textContent);
            });
        }
    });
});
