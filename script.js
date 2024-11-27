document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageNames = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg']; // Add more image filenames here

    imageNames.forEach(name => {
        const img = document.createElement('img');
        img.src = `Images/${name}`;
        img.alt = name;
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
        gallery.appendChild(img);
    });
});