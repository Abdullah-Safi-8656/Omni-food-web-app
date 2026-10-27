// Dynamic footer year
const year_el = document.querySelector(".year");
const current_Year = new Date().getFullYear();

year_el.textContent = current_Year;

// Mbile navigation logic
const headerEl = document.querySelector(".header");
const btn_navEl = document.querySelector(".btn-mobile-nav");

btn_navEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// mobile sticky navigation logic
const hero = document.querySelector(".hero-section");
const body = document.querySelector(".body");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);

observer.observe(hero);
