// Translations object
const translations = {
    es: {
        nav_inicio: 'Inicio',
        nav_nosotros: 'Nosotros',
        nav_servicios: 'Servicios',
        nav_cotizaciones: 'Cotizaciones',
        nav_contacto: 'Contacto',
        
        hero_title: 'Envío de Paquetes Aéreo, Marítimo y Terrestre',
        hero_subtitle: 'Soluciones de logística profesional con cobertura nacional e internacional. Nuestros servicios son operados por personal apliamente capacitado, garantizamos que su carga llegue segura y a tiempo a su destino.',
        hero_btn_quote: 'Cotizar Ahora',
        hero_btn_services: 'Ver Servicios',
        hero_air: 'Aéreo',
        hero_air_desc: '24-72 horas',
        hero_sea: 'Marítimo FCL y LCL',
        hero_sea_desc: 'Carga pesada',
        hero_land: 'Terrestre TL o LTL',
        hero_land_desc: 'Cobertura nacional',
        hero_dispatch: 'Despacho aduanal',
        hero_dispatch_desc: 'Cobertura nacional',
        
        about_title: 'Sobre Nosotros',
        about_subtitle: 'Líderes en Logística Internacional',
        about_stat1: 'Años',
        about_stat2: 'Envíos',
        about_stat3: 'Países',
        about_stat4: 'Satisfacción',
        about_text1: 'Con más de 15 años de experiencia en el sector de la logística y transporte, nos hemos consolidado como una de las empresas más confiables en el envío de paquetes a nivel nacional e internacional.',
        about_text2: 'Nuestra misión es garantizar soluciones integrales en la cadena de suministro de las empresas, a través de la calidad de nuestro servicio, con un equipo altamente capacitado, brindando la mejor atención al cliente y seguimiento en cada embarque.',
        about_feat1: 'Certificación internacional ISO 9001',
        about_feat2: 'Certificación CTPAT (Customs-Trade Partnership Against Terrorism)',
        about_feat3: 'Transporte y gestión logística terrestre, marítima y aérea, con soluciones especializadas',
        about_feat4: 'Rastreo satelital 24/7: Geocercas, alertas y cuenta espejo para cliente',
        about_btn: 'Solicitar Cotización',
        
        services_title: 'Nuestros Servicios',
        services_subtitle: 'Soluciones logísticas adaptadas a tus necesidades',
        service_air_title: 'Envío Aéreo',
        service_air_desc: 'Brindamos transporte aéreo internacional, con opciones programadas y charter, cubriendo destinos clave en Norteamérica, Europa, Lejano Oriente y LATAM, con seguimiento en tiempo real.',
        service_air_feat1: 'Cobertura en Norteamérica, Europa, Lejano Oriente y LATAM.',
        service_air_feat2: 'Servicios de envío programado y charter.',
        service_air_feat3: ' Seguimiento en tiempo real.',
        service_air_feat4: ' Seguro de carga y aduanas prioritarias.',

        service_sea_title: 'Envío Marítimo',
        service_sea_desc: 'Proporcionamos transporte marítimo global, con rutas hacia Asia, Europa y LATAM, ofreciendo soluciones tanto para carga completa como consolidada, con gestión aduanal y aseguramiento.',
        service_sea_feat1: 'Rutas internacionales (México, Asia, Europa, LATAM).',
        service_sea_feat2: 'Modalidades FCL y LCL.',
        service_sea_feat3: 'Consolidación/desconsolidación y aseguramiento de mercancías.',
        service_sea_feat4: 'Cumplimiento con los estándares CTPAT.',

        service_land_title: 'Envío Terrestre',
        service_land_desc: 'Ofrecemos transporte terrestre de carga con cobertura nacional e internacional, especialmente hacia EE.UU. y Canadá, adaptándonos a diferentes modalidades y tipos de carga.',
        service_land_feat1: 'Cobertura nacional e internacional (México, EE.UU., Canadá).',
        service_land_feat2: 'Modalidades FTL, LTL, Hot Shot y Milkruns.',
        service_land_feat3: 'Rastreo satelital 24/7 con geocercas y control de paro motor.',
        service_land_feat4: 'Flota propia con unidades de hasta 22T.',
        service_btn: 'Cotizar Servicio',
        
        quote_title: 'Solicita tu Cotización',
        quote_subtitle: 'Obtén una cotización personalizada en minutos',
        quote_name: 'Nombre Completo',
        quote_email: 'Correo Electrónico',
        quote_phone: 'Teléfono',
        quote_company: 'Empresa (Opcional)',
        quote_service_type: 'Tipo de Servicio',
        quote_select: 'Seleccionar...',
        quote_opt_air: 'Envío Aéreo',
        quote_opt_sea: 'Envío Marítimo',
        quote_opt_land: 'Envío Terrestre',
        quote_weight: 'Peso Aproximado (kg)',
        quote_origin: 'Ciudad de Origen',
        quote_destination: 'Ciudad de Destino',
        quote_message: 'Mensaje Adicional',
        quote_btn: 'Solicitar Cotización Gratis',
        quote_info_title: '¿Por qué cotizar con nosotros?',
        quote_info1_title: 'Respuesta Inmediata',
        quote_info1_desc: 'Recibirás tu cotización en menos de 2 horas hábiles',
        quote_info2_title: 'Precios Competitivos',
        quote_info2_desc: 'Las mejores tarifas del mercado sin costos ocultos',
        quote_info3_title: 'Asesoría Personalizada',
        quote_info3_desc: 'Un experto te acompañará en todo el proceso',
        quote_info4_title: 'Sin Compromiso',
        quote_info4_desc: 'Cotización 100% gratuita y sin obligación',
        quote_schedule: 'Lun - Vie: 8:00 AM - 7:00 PM',
        
        contact_title: 'Contáctanos',
        contact_subtitle: 'Estamos aquí para ayudarte',
        contact_address: 'Dirección',
        contact_phone: 'Teléfono',
        contact_phone_subtitle: 'Línea 24/7',
        contact_email_title: 'Email',
        contact_schedule_title: 'Horario',
        contact_schedule_week: 'Lun - Vie: 8:00 - 19:00',
        contact_schedule_sat: 'Sábados: 9:00 - 14:00',
        contact_schedule_sun: 'Domingos: Cerrado',
        contact_map: 'Mapa de Ubicación',
        contact_map_desc: 'Integra aquí tu mapa de Google Maps',
        contact_form_title: 'Envíanos un Mensaje',
        contact_form_name: 'Nombre',
        contact_form_email: 'Email',
        contact_form_phone: 'Teléfono',
        contact_form_subject: 'Asunto',
        contact_form_message: 'Mensaje',
        contact_form_btn: 'Enviar Mensaje',
        
        footer_desc: 'Líder en servicios de envío de paquetes con más de 15 años de experiencia. Conectamos México con el mundo de manera rápida, segura y confiable.',
        footer_services: 'Servicios',
        footer_air: 'Envío Aéreo',
        footer_sea: 'Envío Marítimo',
        footer_land: 'Envío Terrestre',
        footer_quote: 'Cotizaciones',
        footer_company: 'Empresa',
        footer_about: 'Acerca de',
        footer_blog: 'Blog',
        footer_careers: 'Carreras',
        footer_coverage: 'Cobertura',
        footer_support: 'Soporte',
        footer_faq: 'FAQ',
        footer_contact: 'Contacto',
        footer_terms: 'Términos',
        footer_privacy: 'Privacidad',
        footer_resources: 'Recursos',
        footer_calculator: 'Calculadora',
        footer_tracking: 'Rastreo',
        footer_rates: 'Tarifas',
        footer_api: 'API',
        footer_rights: 'Todos los derechos reservados',
        footer_made: 'Hecho por ByCarmona141',
        footer_in: 'en México'
    },
    en: {
        nav_inicio: 'Home',
        nav_nosotros: 'About Us',
        nav_servicios: 'Services',
        nav_cotizaciones: 'Quotes',
        nav_contacto: 'Contact',

        hero_title: 'Shipping Packages by Air, Sea and Land',
        hero_subtitle: 'Professional logistics solutions with national and international coverage. Our services are operated by highly trained personnel, ensuring that your cargo arrives safely and on time at its destination.',
        hero_btn_quote: 'Get Quote Now',
        hero_btn_services: 'See Services',
        hero_air: 'Air',
        hero_air_desc: '24-72 hours',
        hero_sea: 'Maritime FCL and LCL',
        hero_sea_desc: 'Heavy cargo',
        hero_land: 'Land TL or LTL',
        hero_land_desc: 'National coverage',
        hero_dispatch: 'Customs Clearance',
        hero_dispatch_desc: 'National coverage',
        
        about_title: 'About Us',
        about_subtitle: 'Leaders in International Logistics',
        about_stat1: 'Years',
        about_stat2: 'Shipments',
        about_stat3: 'Countries',
        about_stat4: 'Satisfaction',
        about_text1: 'With over 15 years of experience in the logistics and transportation sector, we have established ourselves as one of the most reliable companies in national and international package shipping.',
        about_text2: 'Our mission is to guarantee comprehensive solutions for companies\' supply chains through the quality of our service, a highly trained team, and providing the best customer service and follow-up for each shipment.',
        about_feat1: 'ISO 9001 international certification',
        about_feat2: 'CTPAT (Customs-Trade Partnership Against Terrorism) Certification',
        about_feat3: 'Land, sea, and air transportation and logistics management, with specialized solutions',
        about_feat4: '24/7 Satellite Tracking: Geofences, Alerts, and Mirror Account for Clients',
        about_btn: 'Request Quote',
        
        services_title: 'Our Services',
        services_subtitle: 'Logistics solutions tailored to your needs',
        service_air_title: 'Air Shipping',
        service_air_desc: 'We provide international air transportation, with scheduled and charter options, covering key destinations in North America, Europe, the Far East, and Latin America, with real-time tracking.',
        service_air_feat1: 'Coverage in North America, Europe, the Far East, and Latin America.',
        service_air_feat2: 'Scheduled and charter shipping services.',
        service_air_feat3: 'Real-time tracking.',
        service_air_feat4: 'Cargo insurance and priority customs.',

        service_sea_title: 'Maritime Shipping',
        service_sea_desc: 'We provide global maritime transport, with routes to Asia, Europe, and Latin America, offering solutions for both full and consolidated loads, with customs clearance and insurance.',
        service_sea_feat1: 'International routes (Mexico, Asia, Europe, LATAM).',
        service_sea_feat2: 'FCL and LCL modalities.',
        service_sea_feat3: 'Consolidation/deconsolidation and insurance of goods.',
        service_sea_feat4: 'Compliance with CTPAT standards.',
        
        service_land_title: 'Land Shipping',
        service_land_desc: 'We offer land transportation of cargo with national and international coverage, especially to the US and Canada, adapting to different modalities and types of cargo.',
        service_land_feat1: 'National and international coverage (Mexico, USA, Canada).',
        service_land_feat2: 'FTL, LTL, Hot Shot and Milkruns modes.',
        service_land_feat3: '24/7 satellite tracking with geofencing and engine shutdown control.',
        service_land_feat4: 'Own fleet with units up to 22T.',
        service_btn: 'Get Quote',
        
        quote_title: 'Request Your Quote',
        quote_subtitle: 'Get a personalized quote in minutes',
        quote_name: 'Full Name',
        quote_email: 'Email Address',
        quote_phone: 'Phone',
        quote_company: 'Company (Optional)',
        quote_service_type: 'Service Type',
        quote_select: 'Select...',
        quote_opt_air: 'Air Shipping',
        quote_opt_sea: 'Sea Shipping',
        quote_opt_land: 'Land Shipping',
        quote_weight: 'Approximate Weight (kg)',
        quote_origin: 'Origin City',
        quote_destination: 'Destination City',
        quote_message: 'Additional Message',
        quote_btn: 'Request Free Quote',
        quote_info_title: 'Why quote with us?',
        quote_info1_title: 'Immediate Response',
        quote_info1_desc: 'You will receive your quote in less than 2 business hours',
        quote_info2_title: 'Competitive Prices',
        quote_info2_desc: 'The best market rates without hidden costs',
        quote_info3_title: 'Personalized Advice',
        quote_info3_desc: 'An expert will accompany you throughout the process',
        quote_info4_title: 'No Commitment',
        quote_info4_desc: '100% free quote with no obligation',
        quote_schedule: 'Mon - Fri: 8:00 AM - 7:00 PM',
        
        contact_title: 'Contact Us',
        contact_subtitle: 'We are here to help you',
        contact_address: 'Address',
        contact_phone: 'Phone',
        contact_phone_subtitle: '24/7 Line',
        contact_email_title: 'Email',
        contact_schedule_title: 'Schedule',
        contact_schedule_week: 'Mon - Fri: 8:00 AM - 7:00 PM',
        contact_schedule_sat: 'Saturdays: 9:00 AM - 2:00 PM',
        contact_schedule_sun: 'Sundays: Closed',
        contact_map: 'Location Map',
        contact_map_desc: 'Integrate your Google Maps here',
        contact_form_title: 'Send Us a Message',
        contact_form_name: 'Name',
        contact_form_email: 'Email',
        contact_form_phone: 'Phone',
        contact_form_subject: 'Subject',
        contact_form_message: 'Message',
        contact_form_btn: 'Send Message',
        
        footer_desc: 'Leader in package shipping services with over 15 years of experience. We connect Mexico to the world quickly, securely, and reliably.',
        footer_services: 'Services',
        footer_air: 'Air Shipping',
        footer_sea: 'Sea Shipping',
        footer_land: 'Land Shipping',
        footer_quote: 'Quotes',
        footer_company: 'Company',
        footer_about: 'About',
        footer_blog: 'Blog',
        footer_careers: 'Careers',
        footer_coverage: 'Coverage',
        footer_support: 'Support',
        footer_faq: 'FAQ',
        footer_contact: 'Contact',
        footer_terms: 'Terms',
        footer_privacy: 'Privacy',
        footer_resources: 'Resources',
        footer_calculator: 'Calculator',
        footer_tracking: 'Tracking',
        footer_rates: 'Rates',
        footer_api: 'API',
        footer_rights: 'All rights reserved',
        footer_made: 'Made by ByCarmona141',
        footer_in: 'in Mexico'
    }
};

// Obtener el idioma guardado o usar español por defecto
let currentLanguage = localStorage.getItem('preferredLanguage') || 'es';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar la interfaz
    document.getElementById('currentLang').textContent = lang.toUpperCase();
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