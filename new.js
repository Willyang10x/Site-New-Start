particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00bcd4" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bcd4",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
      resize: true
    },
    modes: { repulse: { distance: 100 } }
  },
  retina_detect: true
});

const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
  overlay.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
});
