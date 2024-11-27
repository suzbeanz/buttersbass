document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            window.open(src, '_blank');
        });
    });
});