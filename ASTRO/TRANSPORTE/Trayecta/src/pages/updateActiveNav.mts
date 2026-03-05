// Function to update active nav link
export function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Recorrer todas las secciones del documento
    sections.forEach((section) => {
        // Obtener la posición de la sección desde el inicio de la página y su altura
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Si estamos en la sección (considerando el navbar de 100px)
        // La condición se cumple cuando la posición de la ventana está entre la posición de la sección
        // menos 100px y la posición de la sección más su altura menos 100px
        if (scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100) {
            // Almacenar el ID de la sección actual
            current = section.getAttribute("id");
        }
    });

    // Si estamos al inicio de la página, marcar "inicio" como activo
    if (scrollPosition < 100) {
        current = "inicio";
    }

    // Actualizar clases active
    navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");

        // Remover el index.html# si existe y comparar solo con el id
        const linkId = href.replace("/#", "").replace("#", "");

        if (linkId === current) {
            link.classList.add("active");
        }
    });
}
