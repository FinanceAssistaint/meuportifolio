// script.js - Versão 2.0 (Tema Escuro + Funcionalidades)

// 1. Controle do Tema Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para verificar suporte ao localStorage
const storageAvailable = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// Função para aplicar o tema salvo
const applySavedTheme = () => {
  if (storageAvailable()) {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      if (themeToggle) themeToggle.checked = true;
    }
  }
};

// Função para alternar temas
const toggleTheme = () => {
  body.classList.toggle('dark-theme');
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  
  if (storageAvailable()) {
    localStorage.setItem('portfolio-theme', theme);
  }
};

// 2. Inicialização do Tema
document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  
  if (themeToggle) {
    themeToggle.addEventListener('change', toggleTheme);
  }
});

// 3. Botão Voltar ao Topo
const backToTop = () => {
  const btn = document.getElementById('back-to-top');
  
  if (btn) {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 
        ? btn.style.display = 'block'
        : btn.style.display = 'none';
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

// 4. Inicialização Geral
const init = () => {
  backToTop();
  AOS.init({
    duration: 1000,
    offset: 120,
    easing: 'ease-in-out',
    once: false
  });
};

// Inicia todas as funcionalidades
window.addEventListener('load', init);