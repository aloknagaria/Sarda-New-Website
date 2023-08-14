// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter something: ", function(userInput) {
//     console.log("You entered:", userInput);
//     rl.close();
// });


const phrases = [
    "Front-End Developer",
    "Software Developer",
    "Former Intern at Sarda Consulting"
];

const typingElement = document.getElementById('typing-text');
let phraseIndex = 0;
let charIndex = 0;

function typeNextChar() {
    if (charIndex < phrases[phraseIndex].length) {
        typingElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeNextChar, 100); // Adjust typing speed here
    } else {
        setTimeout(eraseText, 1000); // Display each phrase for 2 seconds
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed here
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeNextChar, 100); // Pause before typing the next phrase
    }
}

typeNextChar(); // Start the typing animation
