// JavaScript code for shuffling the colors of the Rubik's Cube faces with a constraint

const faces = document.querySelectorAll('.cube-face');
const shuffleButton = document.getElementById('shuffle');

// Define the six possible colors
const cubeColors = ['#ff6347', '#0000cd', '#ffff00', '#008000', '#ff4500', '#ffffff'];

shuffleButton.addEventListener('click', () => {
    // Shuffle the colors randomly
    shuffleArray(cubeColors);

    // Assign the shuffled colors to the cube faces
    faces.forEach((face, index) => {
        face.style.backgroundColor = cubeColors[index];
    });
});

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
