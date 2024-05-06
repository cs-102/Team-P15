// variable initialization
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const controlLinks = document.querySelectorAll(".controls a");
//smooth scrolling
document.querySelectorAll('a[href^="#main"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
//automatic rotation function
let i = 0,
  j = 1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    carousel.style.rotate = `-${++i * 45}deg`;

    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(`.slide:nth-child(${++j})`);
    activeSlide.classList.add("active");

    document.querySelector("a.active").classList.remove("active");
    const activeLink = document.querySelector(`.controls a:nth-child(${j})`);
    activeLink.classList.add("active");

    j === 8 && (j = 0);
  }, 2000);
};

intervalFn();
//Control Links Event Listeners

//
controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(intervalId);
    carousel.style.rotate = `-${(i - j + Number(control.dataset.index)) * 45
      }deg`;

    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(
      `.slide:nth-child(${control.dataset.index})`
    );
    activeSlide.classList.add("active");

    document.querySelector("a.active").classList.remove("active");
    control.classList.add("active");
  });
});
//Pause and Play Event Listeners
carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("Pause");
});

carousel.addEventListener("mouseleave", () => {
  intervalFn();
  console.log("Play");
});