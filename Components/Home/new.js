document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('header')) {
    fetch('/Components/Header/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o header: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        const headerContainer = document.createElement('header');
        headerContainer.innerHTML = data;
        document.getElementById('header-placeholder').appendChild(headerContainer);
        setupMenuHamburger(); 
      })
      .catch(error => console.error(error));
  } else {
    setupMenuHamburger(); 
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('footer')) {
    fetch('/Components/Footer/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o footer: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        const footerContainer = document.createElement('footer');
        footerContainer.innerHTML = data;
        document.body.appendChild(footerContainer);
      })
      .catch(error => console.error(error));
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.backgroundColor = "white"
  }
})

function animarContadores() {
  const contadores = document.querySelectorAll(".item-estatistica")

  contadores.forEach((contador) => {
    const alvo = Number.parseInt(contador.getAttribute("data-count"))
    const elementoNumero = contador.querySelector(".numero-estatistica")
    let atual = 0
    const incremento = alvo / 100

    const atualizarContador = () => {
      if (atual < alvo) {
        atual += incremento
        elementoNumero.textContent = Math.ceil(atual)
        setTimeout(atualizarContador, 20)
      } else {
        elementoNumero.textContent = alvo
      }
    }

    atualizarContador()
  })
}

const opcoesobservador = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible")

      if (entrada.target.classList.contains("secao-estatisticas")) {
        animarContadores()
      }
    }
  })
}, opcoesobservador)

document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".fade-in-up, .secao-estatisticas")
  elementosAnimados.forEach((el) => observador.observe(el))
})

document.addEventListener("DOMContentLoaded", () => {
  const elemento = document.getElementById("typewriter")
  if (elemento) {
    const textos = [
      "New Start Agência de Mídia Digital!",
      "Aqui a sua Empresa se destaca!",
      "Transformamos ideias em resultados!",
    ]
    const velocidade = 70
    const velocidadeApagar = 40
    const delayEntre = 1500
    let indiceTexto = 0
    let indiceChar = 0
    let apagando = false

    function efeitoDigitar() {
      const textoAtual = textos[indiceTexto]

      if (!apagando) {
        elemento.textContent = textoAtual.substring(0, indiceChar + 1)
        indiceChar++
        if (indiceChar === textoAtual.length) {
          apagando = true
          setTimeout(efeitoDigitar, delayEntre)
          return
        }
      } else {
        elemento.textContent = textoAtual.substring(0, indiceChar - 1)
        indiceChar--
        if (indiceChar === 0) {
          apagando = false
          indiceTexto = (indiceTexto + 1) % textos.length
        }
      }

      setTimeout(efeitoDigitar, apagando ? velocidadeApagar : velocidade)
    }

    efeitoDigitar()
  }
})

particlesJS("particles-js", {
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
      width: 1,
    },
    move: { enable: true, speed: 3 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
      resize: true,
    },
    modes: { repulse: { distance: 100 } },
  },
  retina_detect: true,
})

document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
  ancora.addEventListener("click", function (e) {
    e.preventDefault()
    const alvo = document.querySelector(this.getAttribute("href"))
    if (alvo) {
      alvo.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

function setupMenuHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-menu");
  const overlay = document.querySelector(".menu-overlay");

  if (!hamburger || !sideMenu || !closeBtn || !overlay) return;

  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("show");
    overlay.classList.add("show");
    sideMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  function fecharMenu() {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
    sideMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", fecharMenu);
  overlay.addEventListener("click", fecharMenu);
  sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenu);
  });
}
