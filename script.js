const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Message sent!");
});
