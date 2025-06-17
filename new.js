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

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("typewriter");
  const texts = [
    "New Start Agência de Mídia digital!",
    "Aqui a sua Empresa se destaca!"
  ];
  const speed = 70;
  const eraseSpeed = 40;
  const delayBetween = 1500;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
        return;
      }
    } else {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
  }

  typeEffect();
});