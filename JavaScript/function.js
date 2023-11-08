'use strict';

// Function to toggle between dark and light themes
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains('light-theme')) {
        // Switch to dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.querySelector('.themeButton').textContent = 'Switch to Light Theme';
    } else {
        // Switch to light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        document.querySelector('.themeButton').textContent = 'Switch to Dark Theme';
    }
}

// Find the theme button element
const themeButton = document.querySelector('.themeButton');

// Add a click event listener to the theme button
themeButton.addEventListener('click', function () {
    toggleTheme();
});

// Function to initialize the theme based on the current class
function initializeTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        themeButton.textContent = 'Switch to Dark Theme';
    } else {
        themeButton.textContent = 'Switch to Light Theme';
    }
}

// Call the initializeTheme function to set the initial theme text
initializeTheme();


document.addEventListener('DOMContentLoaded', function () {
    const saberSwitch = document.getElementById('saberSwitch');
    const saberBlade = document.getElementById('saberlight');

    // Initialize the lightsaber blade as visible
    let isBladeHidden = true;

    saberSwitch.addEventListener('click', function () {
        if (isBladeHidden) {
            saberBlade.style.visibility = 'visible';
        } else {
            saberBlade.style.visibility = 'hidden';
        }

        // Toggle the visibility state
        isBladeHidden = !isBladeHidden;
    });
});


/*text morph code used in the <div class="pageHead"> throught the end of<svg id="filters">
under the <header>*/
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "SPINAL",
    "CODEZ",
    "BINARY",
    "BACKBONE"
];

const morphTime = 3;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();