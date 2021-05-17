const sections = document.querySelectorAll("section");
const navigationItems = document.querySelectorAll("li");
const navigationLinks = document.querySelectorAll("a");

window.addEventListener("scroll", function (e) {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (this.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navigationItems.forEach((navitem) => {
    navitem.classList.remove("active");
    navitem.children[0].classList.remove("active-text");
    if (navitem.classList.contains(current)) {
      navitem.classList.add("active");
      navitem.children[0].classList.add("active-text");
    }
  });
});
