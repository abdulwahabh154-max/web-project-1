let currentTheme = localStorage.getItem("theme") || "light";

// handling dark theme

function switchTheme() {
  if (currentTheme === "light") {
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    currentTheme = "light";
    localStorage.setItem("theme", "light");
  }
}
function updateDocumentTheme() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-light", "btn-dark");
    if (!btn.classList.contains("btn-primary"))
      btn.classList.add(currentTheme === "light" ? "btn-light" : "btn-dark");
    else {
      btn.classList.add(currentTheme === "light" ? "btn-primary" : "btn-dark");
    }
  });

  const sections = document.querySelectorAll("[data-theme-changeable]");
  sections.forEach((section) => {
    section.classList.remove("light-theme", "dark-theme");
    section.classList.add(
      currentTheme === "light" ? "light-theme" : "dark-theme"
    );
  });

  const body = document.body;
  body.classList.remove("dark-theme-background");
  if (currentTheme === "dark") body.classList.add("dark-theme-background");

  const themeSwitchLabel = document.getElementById("themeswitch");
  if (themeSwitchLabel) {
    themeSwitchLabel.innerHTML =
      currentTheme === "light"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }
}
const themeSwitch = document.getElementById("switchCheckReverse");
if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    switchTheme();
    updateDocumentTheme();
  });
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  if (currentTheme === "dark") themeSwitch.checked = true; // if we load into dark theme make the switch on
  updateDocumentTheme();
});
