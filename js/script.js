// Dicionário de traduções
const translations = {
    pt: {
        'page-title': 'Guilherme Santos - Desenvolvedor de Software',
        'nav-about': 'Sobre',
        'nav-xp': 'Experiência',
        'nav-education': 'Formação',
        'nav-projects': 'Projetos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contato',
        'about-title': 'Sobre Mim',
        'about-description': 'Sou um desenvolvedor full stack apaixonado por tecnologia, com mais de 3 anos de experiência criando soluções robustas e escaláveis. Especializado em Java, Spring Boot e arquiteturas cloud na AWS, busco sempre entregar código limpo e eficiente.',
        'about-description-2': 'Quando não estou codando, gosto de estudar novas tecnologias, contribuir para projetos open source e adquirir conhecimento com a comunidade de desenvolvedores.',
        'cv-title' : 'Currículo',
        'cv-filePath' : 'cv-guilherme.santos.pdf',
        'xp-title': 'Experiência',
        'xp-title1' : 'Desenvolvedor Backend | Bolsista',
        'xp-description1' : 'Projeto acadêmico no setor agro, SMARTFARM - IFPB',
        'xp-since1' : 'Abr.2024 - Dez.2024',
        'xp-title2' : 'Aluno Pesquisador',
        'xp-description2' : 'Pesquisas voltada em Sistemas Embarcados, VIRTUS CC',
        'xp-since2' : 'Jun.2024 - Jun.2025',
        'about-education' : 'Formação',
        'education1-title' : 'Análise e Desenvolvimento de Sistemas',
        'education1-description' : 'Graduação Tecnológica no Instituto Federal da Paraíba.',
        'education1-link' : 'Grade Curricular →',
        'education2-title' : 'Re/Start AWS + IA',
        'education2-description' : 'Curso Técnico focado na certificação na AWS Cloud Practitioner, fornecido pela Escola da Nuvem.',
        'education2-link' : 'Site →',
        'projects-title': 'Projetos',
        'project1-title': 'FanPage do Corinthians',
        'project1-description': 'Plataforma completa de FanPage desenvolvida com Java, Spring Boot, MongoDB e Angular. Inclui sistema de notícias, equipe e partidas.',
        'project2-title': 'Prenda o Gato',
        'project2-description': 'Chat Noir é um jogo de tabuleiro, conhecido por Pegue o Gato ou Prenda o Gato.',
        'project3-title': 'Blog Pessoal',
        'project3-description': 'Uma aplicação full-stack para registrar atividades diárias em formato de entradas de blog. Desenvolvida com React.js, Node.js e MongoDB.',
        'project4-title': 'Tutor Inteligente (ChatBot)',
        'project4-description': 'Página que oferece serviços de tutoria para quem deseja obter a certificação AWS Cloud Practitioner.',
        'project-link': 'Ver Projeto →',
        'skills-title': 'Habilidades',
        'skills-language': 'Linguagens de Programação e Frameworks',
        'skills-database': 'Banco de Dados',
        'skills-cloud': 'Cloud & DevOps',
        'skills-tools': 'Ferramentas',
        'contact-title': 'Contato',
        'contact-description': 'Entre em contato comigo através do formulário ou pelas redes sociais.',
        'form-name': 'Nome',
        'form-email': 'Email',
        'form-message': 'Mensagem',
        'form-submit': 'Enviar Mensagem',
        'form-success': '✓ Mensagem enviada com sucesso! Entrarei em contato em breve.',
        'footer-copyright': '© 2025 Guilherme Santos. Todos os direitos reservados.'
    },
    en: {
        'page-title': 'Guilherme Santos - Software Developer',
        'nav-about': 'About',
        'nav-xp': 'Experience',
        'nav-education': 'Trainning',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'about-title': 'About Me',
        'about-description': 'I\'m a full-stack developer passionate about technology, with over three years of experience building robust and scalable solutions. Specializing in Java, Spring Boot, and cloud architectures on AWS, I always strive to deliver clean and efficient code.',
        'about-description-2': 'When I\'m not coding, I enjoy studying new technologies, contributing to open source projects and sharing knowledge with the developer community.',
        'cv-title' : 'Resume',
        'cv-filePath' : 'resume-guilherme.santos.pdf',
        'xp-title': 'Experience',
        'xp-title1' : 'Backend Developer | Scholarship',
        'xp-description1' : 'Academic project in the agricultural sector, SMARTFARM - IFPB',
        'xp-since1' : 'Apr.2024 - Dec.2024',
        'xp-title2' : 'Research Student',
        'xp-description2' : 'Research focused on Embedded Systems, VIRTUS CC',
        'xp-since2' : 'Jun.2024 - Jun.2025',
        'about-education' : 'Graduate',
        'education1-title' : 'Systems Analysis and Development',
        'education1-description' : 'Technological Undergraduate Degree at the Federal Institute of Paraíba.',
        'education1-link' : 'Curriculum →',
        'education2-title' : 'AWS Re/Start + AI',
        'education2-description' : 'Technical course focused on AWS Cloud Practitioner certification, provided by Escola da Nuvem.',
        'education2-link' : 'Website →',
        'projects-title': 'Projects',
        'project1-title': 'Corinthians FanPage',
        'project1-description': 'Complete FanPage platform developed with Java, Spring Boot, MongoDB and Angular. Includes news system, team and matches.',
        'project2-title': 'Chat Noir',
        'project2-description': 'Chat Noir is a board game, known as Catch the Cat or Trap the Cat.',
        'project3-title': 'Personal blog',
        'project3-description': 'A full-stack application for recording daily activities in the form of blog entries. Developed with React.js, Node.js and MongoDB.',
        'project4-title': 'Smart Tutor (ChatBot)',
        'project4-description': 'Page offering tutoring services for those seeking AWS Cloud Practitioner certification.',
        'project-link': 'View Project →',
        'skills-title': 'Skills',
        'skills-language': 'Languages Program and Frameworks',
        'skills-database': 'Database',
        'skills-cloud': 'Cloud & DevOps',
        'skills-tools': 'Tools',
        'contact-title': 'Contact',
        'contact-description': 'Get in touch with me through the form or social media.',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'form-success': '✓ Message sent successfully! I will get in touch soon.',
        'footer-copyright': '© 2025 Guilherme Santos. All rights reserved.'
    }
};

// Estado atual do idioma
let currentLanguage = 'pt';

// Elementos DOM
const languageToggle = document.getElementById('languageToggle');
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguageToggle();
    initializeNavigation();
    initializeContactForm();
    initializeSmoothScrolling();
});

/* Inicializa o sistema de alternância de idiomas */
function initializeLanguageToggle() {
    // Event listener para o botão de alternância de idioma
    languageToggle.addEventListener('click', function () {
        toggleLanguage();
    });

    // Event listeners para as opções de idioma individuais
    const langOptions = languageToggle.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang !== currentLanguage) {
                setLanguage(selectedLang);
            }
        });
    });
}

// Alterna entre os idiomas disponíveis
function toggleLanguage() {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
}

/**
 * Define o idioma ativo e atualiza a interface
 * @param {string} language - Código do idioma ('pt' ou 'en')
 */
function setLanguage(language) {
    if (!translations[language]) {
        console.error('Idioma não suportado:', language);
        return;
    }

    currentLanguage = language;

    // Atualiza o estado visual do botão de idioma
    updateLanguageToggleState();

    // Atualiza todos os textos da página
    updatePageTexts();

    // Atualiza o atributo lang do HTML
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';

    // Salva a preferência no localStorage
    localStorage.setItem('preferredLanguage', language);
}

/**
 * Atualiza o estado visual do botão de alternância de idioma
 */
function updateLanguageToggleState() {
    const langOptions = languageToggle.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

/**
 * Atualiza todos os textos da página com base no idioma atual
 */
function updatePageTexts() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];

        if (translation) {
            // Verifica se é um elemento de input/textarea para atualizar placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn('Tradução não encontrada para a chave:', key);
        }
    });
}

/**
 * Inicializa a navegação mobile
 */
function initializeNavigation() {
    // Toggle do menu mobile
    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');

        // Animação do ícone hambúrguer
        this.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (mobile)
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

/**
 * Inicializa o formulário de contato
 */
function initializeContactForm() {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Coleta os dados do formulário
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Validação básica
        if (!validateForm(data)) {
            return;
        }

        // Simula o envio do formulário
        submitForm(data);
    });
}

/**
 * Valida os dados do formulário
 * @param {Object} data - Dados do formulário
 * @returns {boolean} - True se válido, false caso contrário
 */
function validateForm(data) {
    // Validação do nome
    if (!data.name || data.name.trim().length < 2) {
        showFormError('Nome deve ter pelo menos 2 caracteres');
        return false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFormError('Por favor, insira um email válido');
        return false;
    }

    // Validação da mensagem
    if (!data.message || data.message.trim().length < 10) {
        showFormError('Mensagem deve ter pelo menos 10 caracteres');
        return false;
    }

    return true;
}

/**
 * Exibe uma mensagem de erro do formulário
 * @param {string} message - Mensagem de erro
 */
function showFormError(message) {
    // Remove mensagem de erro anterior se existir
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Cria e exibe nova mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background-color: #d32f2f;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        text-align: center;
    `;
    errorDiv.textContent = message;

    contactForm.appendChild(errorDiv);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

/**
 * Simula o envio do formulário
 * @param {Object} data - Dados do formulário
 */
function submitForm(data) {
    // Desabilita o botão de envio
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';

    // Simula delay de envio
    setTimeout(() => {
        // Exibe mensagem de sucesso
        successMessage.classList.add('show');

        // Limpa o formulário
        contactForm.reset();

        // Restaura o botão
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Remove a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

        // Log dos dados (em produção, aqui seria feita a requisição real)
        console.log('Dados do formulário enviados:', data);

    }, 1500);
}

/**
 * Inicializa o scroll suave para links de navegação
 */
function initializeSmoothScrolling() {
    // Adiciona comportamento de scroll suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Carrega a preferência de idioma salva
 */
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage);
    }
}

// Carrega idioma salvo quando a página carrega
document.addEventListener('DOMContentLoaded', loadSavedLanguage);

// Função utilitária para debounce (otimização de performance)
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

// Aplica debounce ao evento de resize
window.addEventListener('resize', debounce(function () {
    // Recalcula layouts se necessário
    console.log('Tela redimensionada');
}, 250));