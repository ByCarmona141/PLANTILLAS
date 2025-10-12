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
    homeTranslations,
    aboutTranslations,
    servicesTranslations,
    quotesTranslations,
    contactTranslations,
    footerTranslations,
    maritimeTranslations
);

// Obtener el idioma guardado o usar español por defecto
let currentLanguage = localStorage.getItem('preferredLanguage') || 'es';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Aplicar traducciones
    applyTranslations(lang);
}

// Función separada para aplicar traducciones
function applyTranslations(lang) {
    // Actualizar el indicador de idioma
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Actualizar el atributo lang del documento
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

// Función para inicializar las traducciones cuando los componentes estén listos
function initializeTranslations() {
    // Aplicar el idioma guardado
    applyTranslations(currentLanguage);
}

// NO usar DOMContentLoaded aquí, se llamará desde main.js después de cargar componentes