// Initialize app after all components are loaded
function initializeApp() {
    try {
        // IMPORTANTE: Aplicar traducciones después de cargar todos los componentes
        if (typeof initializeTranslations === 'function') {
            initializeTranslations();
        }
    } catch (error) {
        console.warn('Translation initialization skipped:', error.message);
    }

    // ==========================================
    // Terrestre Submenu Toggle para móviles
    // ==========================================
    setTimeout(function() {
        const terrestreToggle = document.querySelector('.terrestre-toggle');
        const terrestreSubmenu = document.querySelector('.terrestre-submenu');

        if (terrestreToggle && terrestreSubmenu) {
            console.log('Inicializando terrestre-toggle');
            
            terrestreToggle.addEventListener('click', function(e) {
                console.log('Click en terrestre, ancho:', window.innerWidth);
                
                // Solo en móviles (data-bs-toggle="dropdown" maneja escritorio)
                if (window.innerWidth <= 991.98) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle aria-expanded
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded);
                    
                    // Toggle la clase show en el submenú
                    terrestreSubmenu.classList.toggle('show');
                    console.log('Submenú toggled, show:', terrestreSubmenu.classList.contains('show'));
                }
            });

            // Cerrar el submenú cuando se haga clic en un enlace
            const links = terrestreSubmenu.querySelectorAll('.dropdown-item');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    terrestreSubmenu.classList.remove('show');
                    terrestreToggle.setAttribute('aria-expanded', 'false');
                    console.log('Link clickeado, cerrando submenú');
                    
                    // Cerrar también el menú principal en móviles
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const toggler = document.querySelector('.navbar-toggler');
                        if (toggler) toggler.click();
                    }
                });
            });
        }
    }, 500);
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // No aplicar smooth scroll a dropdowns
            if (this.classList.contains('dropdown-toggle') || this.classList.contains('dropdown-item')) {
                return;
            }
            
            // Validar que el href no sea solo "#" y sea válido
            if (href && href !== '#' && href.length > 1) {
                e.preventDefault();
                try {
                    const target = document.querySelector(href);
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
                } catch (error) {
                    console.warn('Error en smooth scrolling:', error);
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
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            try {
                // Verificar que currentLanguage existe
                const currentLang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'es';
                
                const message = currentLang === 'es' 
                    ? '¡Gracias por contactarnos! Te responderemos a la brevedad.' 
                    : 'Thank you for contacting us! We will respond shortly.';
                
                // Verificar que Swal existe
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: currentLang === 'es' ? '¡Mensaje enviado!' : 'Message sent!',
                        text: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    alert(message);
                }
                
                // Reset the form after submission
                this.reset();
            } catch (error) {
                console.error('Error en formulario de contacto:', error);
            }
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
    
    // Animacion de Cards que se muestran al hacer scroll
    document.querySelectorAll('.service-card, .contact-info-card, .about-stats').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Expose changeLanguage to global scope for onclick handlers
// Añadir verificación para evitar errores si la función no está definida
window.changeLanguage = typeof changeLanguage === 'function' ? changeLanguage : function(lang) {
    console.warn('changeLanguage function not defined');
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});