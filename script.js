// JavaScript code for shuffling the colors of the Rubik's Cube faces

const faces = document.querySelectorAll('.cube-face');
const shuffleButton = document.getElementById('shuffle');

const cubeColors = ['#ff6347', '#0000cd', '#ffff00', '#008000', '#ff4500', '#ffffff']; // Colors for the cube faces

shuffleButton.addEventListener('click', () => {
    faces.forEach((face) => {
        // Randomly select a color from the cubeColors array
        const randomColor = cubeColors[Math.floor(Math.random() * cubeColors.length)];
        
        // Apply the selected color as the background
        face.style.backgroundColor = randomColor;
    });
});
