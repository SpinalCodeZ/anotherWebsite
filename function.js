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
