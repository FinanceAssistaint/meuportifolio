// Seleciona o botão de alternar tema e o corpo da página
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

// Função para aplicar o tema salvo ou o tema padrão
const applySavedTheme = () => {
  const savedTheme = isLocalStorageAvailable() ? localStorage.getItem('theme') : 'light';
  body.classList.add(savedTheme);
  if (themeToggle) {
    themeToggle.checked = savedTheme === 'dark';
  }
};

// Função para alternar o tema
const toggleTheme = () => {
  if (themeToggle.checked) {
    body.classList.replace('light', 'dark');
    if (isLocalStorageAvailable()) {
      localStorage.setItem('theme', 'dark');
    }
  } else {
    body.classList.replace('dark', 'light');
    if (isLocalStorageAvailable()) {
      localStorage.setItem('theme', 'light');
    }
  }
};

// Aplica o tema salvo ao carregar a página
applySavedTheme();

// Adiciona o evento de alternar tema ao botão
if (themeToggle) {
  themeToggle.addEventListener('change', toggleTheme);
}