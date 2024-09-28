const button = document.getElementById('toggleButton');
let isDarkMode = true;

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isDarkMode = !isDarkMode;
    // Update the button's innerHTML to show the correct icon
    button.innerHTML = isDarkMode ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
});
