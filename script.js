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

const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const navLinks = document.querySelector("#navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    mobileMenuBtn.textContent = isOpen ? "Close" : "Menu";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.textContent = "Menu";
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = mobileMenuBtn.contains(event.target);

    if (
      navLinks.classList.contains("is-open") &&
      !clickedInsideMenu &&
      !clickedMenuButton
    ) {
      navLinks.classList.remove("is-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.textContent = "Menu";
    }
  });
}