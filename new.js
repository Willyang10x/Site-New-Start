particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00bcd4" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
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


document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('nav-menu').classList.toggle('show');
});
