// Select the theme button from the HTML
const themeBtn = document.getElementById("themeBtn");

// Listen for a click on the button
themeBtn.addEventListener("click", () => {

    // Add/remove the dark-mode class on the body
    document.body.classList.toggle("dark-mode");

    // Check whether dark mode is active
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Change the button text depending on the current theme
    if (isDarkMode) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});