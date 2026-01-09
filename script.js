function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-box .icon");
  const text = document.querySelector(".theme-box .text");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.textContent = "☀️";
    text.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙";
    text.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
}

/* Apply saved theme on every page */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.querySelector(".theme-box .icon");
  const text = document.querySelector(".theme-box .text");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (icon && text) {
      icon.textContent = "☀️";
      text.textContent = "Light";
    }
  }
});
