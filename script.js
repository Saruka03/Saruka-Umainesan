const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height * 0.75) {
      section.classList.add("active");
      section.classList.remove("fade-out");
    } else {
      section.classList.remove("active");
      section.classList.add("fade-out");
    }
  });
});

/* Dark / Light Mode */
function toggleTheme() {
  document.body.classList.toggle("dark");

  const icon = document.querySelector(".icon");
  const text = document.querySelector(".text");

  if (document.body.classList.contains("dark")) {
    icon.textContent = "☀️";
    text.textContent = "Light";
  } else {
    icon.textContent = "🌙";
    text.textContent = "Dark";
  }
}
