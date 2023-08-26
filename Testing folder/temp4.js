document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    let prevIndex = 0;
  
    window.addEventListener("scroll", function () {
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentIndex = index;
        }
      });
  
      if (currentIndex !== prevIndex) {
        sections[prevIndex].classList.remove("active");
        sections[currentIndex].classList.add("active");
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[currentIndex].classList.add("active");
        prevIndex = currentIndex;
      }
    });
  });
  