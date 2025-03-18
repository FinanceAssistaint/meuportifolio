// script.js - Versão 4.1 (Tema Escuro Estável)

// 1. Controle do Tema
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 2. Verificação de LocalStorage
const isLocalStorageAvailable = () => {
    try {
        const test = 'themeTest';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

// 3. Carregar Tema Salvo
const loadTheme = () => {
    if (isLocalStorageAvailable()) {
        const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
        htmlElement.classList.toggle('dark-theme', savedTheme === 'dark');
        themeToggle.checked = savedTheme === 'dark';
        
        // Forçar repaint para transição suave
        setTimeout(() => {
            htmlElement.style.transition = 'all 0.3s ease';
        }, 10);
    }
};

// 4. Alternar Tema
const toggleTheme = () => {
    htmlElement.classList.toggle('dark-theme');
    const theme = htmlElement.classList.contains('dark-theme') ? 'dark' : 'light';
    
    if (isLocalStorageAvailable()) {
        localStorage.setItem('portfolioTheme', theme);
    }
};

// 5. Gerenciar Botão Voltar ao Topo
const setupBackToTop = () => {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// 6. Inicialização Geral
const init = () => {
    // Configurações iniciais
    htmlElement.style.transition = 'none'; // Reset inicial
    
    // Carregar tema
    loadTheme();
    
    // Event listeners
    themeToggle.addEventListener('change', toggleTheme);
    
    // Configurar componentes
    setupBackToTop();
    
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        offset: 120,
        easing: 'ease-in-out',
        once: false
    });
};

// 7. Iniciar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);