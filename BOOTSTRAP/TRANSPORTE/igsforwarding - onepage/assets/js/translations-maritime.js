// Archivo principal de traducciones
// Combina todas las traducciones de los diferentes componentes

// Función para combinar objetos de traducción
function mergeTranslations(...translationObjects) {
    const result = { es: {}, en: {} };
    
    translationObjects.forEach(obj => {
        Object.assign(result.es, obj.es);
        Object.assign(result.en, obj.en);
    });
    
    return result;
}

// Combinar todas las traducciones
const translations = mergeTranslations(
    navbarTranslations,
    //homeTranslations,
    //aboutTranslations,
    //servicesTranslations,
    //quotesTranslations,
    //contactTranslations,
    //footerTranslations,
    //maritimeTranslations
);

// Obtener el idioma guardado o usar español por defecto
let currentLanguage = localStorage.getItem('preferredLanguage') || 'es';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar la interfaz
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en-US';
    
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
}

// Aplicar el idioma guardado cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un momento para que los componentes se carguen
    setTimeout(() => {
        changeLanguage(currentLanguage);
    }, 100);
});