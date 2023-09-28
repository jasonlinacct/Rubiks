// JavaScript code for cube shuffling (basic example)

const faces = document.querySelectorAll('.cube-face');
const shuffleButton = document.getElementById('shuffle');

shuffleButton.addEventListener('click', () => {
    faces.forEach((face) => {
        // Change the content of each face when shuffling
        face.textContent = Math.floor(Math.random() * 6) + 1;
    });
});
