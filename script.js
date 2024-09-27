const button = document.getElementById('toggleButton');
let isDarkMode = true;

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isDarkMode = !isDarkMode;
    button.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});