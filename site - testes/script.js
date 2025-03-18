// Tema Escuro com Persistência
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o localStorage está disponível
const isLocalStorageAvailable = () => {
    try {
        const test = 'test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

// Verifica o localStorage ao carregar a página
const savedTheme = isLocalStorageAvailable() ? localStorage.getItem('theme') : 'light';
body.classList.toggle('dark-theme', savedTheme === 'dark');
themeToggle.checked = savedTheme === 'dark';

// Evento de alteração
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        if (isLocalStorageAvailable()) {
            localStorage.setItem('theme', theme);
        }
    });
}

// Função para navegação suave entre os projetos
const navigateToProject = (url) => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = 0;

    setTimeout(() => {
        window.location.href = url;
    }, 500);
};

// Captura os links de "Ver mais" dos projetos e adiciona o evento de navegação
const projectLinks = document.querySelectorAll('.projeto a');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToProject(link.href);
    });
});

// Adiciona transição de entrada ao carregar a página
window.addEventListener('load', () => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = 1;
});

// Função para abrir o modal
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
};

// Função para fechar o modal
const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
};

// Captura os links de "Ver mais" dos projetos e abre o modal correspondente
const modalLinks = document.querySelectorAll('.projeto a[data-modal]');
modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        openModal(`modal-${modalId}`);
    });
});

// Captura os botões de fechar o modal
const closeButtons = document.querySelectorAll('.modal .close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal.id);
    });
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Botão de Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Menu Hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique se propague para o window
        mobileNav.classList.toggle('show-menu');
    });

    // Fechar ao clicar fora
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-nav') && !e.target.closest('.menu-toggle')) {
            mobileNav.classList.remove('show-menu');
        }
    });

    // Fechar ao clicar nos links
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('show-menu');
        });
    });
}