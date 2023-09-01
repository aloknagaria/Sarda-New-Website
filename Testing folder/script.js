const sections = document.querySelectorAll(".scroll-section");

sections.forEach(section => {
  section.addEventListener("click", () => {
    sections.forEach(s => s.classList.remove("active"));
    section.classList.add("active");
  });
});