document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const bio = button.parentElement.querySelector('.bio');
        const isVisible = bio.style.display === 'block';
        bio.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'More Info' : 'Hide Info';
    });
});
