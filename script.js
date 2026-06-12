const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark-mode");
}

function updateThemeLabel() {
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle?.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

updateThemeLabel();

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeLabel();
});
