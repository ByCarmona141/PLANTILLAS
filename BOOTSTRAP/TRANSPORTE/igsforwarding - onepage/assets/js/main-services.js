// Initialize app after all components are loaded
function initializeApp() {
    try {
        // Inicializar el carrusel explícitamente
        const carouselElement = document.getElementById('carouselCaptions');
        if (carouselElement) {
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 4000,
                ride: 'carousel'
            });
        }
       
        // IMPORTANTE: Aplicar traducciones después de cargar todos los componentes
        if (typeof initializeTranslations === 'function') {
            initializeTranslations();
        }
    } catch (error) {
        console.warn('Translation initialization skipped:', error.message);
    }
    
    // ==========================================
    // Establecer active según la página actual
    // ==========================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Limpiar activos previos
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Marcar el link actual como activo
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#')) return;
            
            const linkPage = href.split('/').pop().split('#')[0];
            
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Llamar la función al cargar
    setActiveNavLink();
   
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
window.changeLanguage = typeof changeLanguage === 'function' ? changeLanguage : function(lang) {
    console.warn('changeLanguage function not defined');
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});