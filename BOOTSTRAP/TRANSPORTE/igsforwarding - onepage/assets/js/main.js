// Initialize app after all components are loaded
function initializeApp() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Function to update active nav link
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Si estamos en la sección (considerando el navbar de 70px)
            if (scrollPosition >= (sectionTop - 100) && scrollPosition < (sectionTop + sectionHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        // Si estamos al inicio de la página, marcar "inicio" como activo
        if (scrollPosition < 100) {
            current = 'inicio';
        }
        
        // Actualizar clases active
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Remover el index.html# si existe y comparar solo con el id
            const linkId = href.replace('index.html#', '').replace('#', '');
            
            if (linkId === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Navbar scroll effect and active section
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            }
        }
        
        updateActiveNav();
    });
    
    // Llamar una vez al cargar para establecer el estado inicial
    updateActiveNav();
    
    // Quote form submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const message = currentLanguage === 'es' 
                ? '¡Gracias! Tu solicitud de cotización ha sido enviada. Te contactaremos pronto.' 
                : 'Thank you! Your quote request has been sent. We will contact you soon.';
            
            // SweetAlert notification
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Solicitud enviada!",
                text: message,
                showConfirmButton: false,
                timer: 1500
            });

            // Reset the form after submission
            this.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const message = currentLanguage === 'es' 
                ? '¡Gracias por contactarnos! Te responderemos a la brevedad.' 
                : 'Thank you for contacting us! We will respond shortly.';
            
            // SweetAlert notification
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Mensaje enviado!",
                text: message,
                showConfirmButton: false,
                timer: 1500
            });

            // Reset the form after submission
            this.reset();
        });
    }
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements
    document.querySelectorAll('.service-card, .contact-info-card, .about-stats').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Expose changeLanguage to global scope for onclick handlers
window.changeLanguage = changeLanguage;