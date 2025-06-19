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

const hamburger = document.getElementById("hamburger")
const sideMenu = document.getElementById("side-menu")
const closeMenu = document.getElementById("close-menu")
const overlay = document.getElementById("menu-overlay")

hamburger.addEventListener("click", () => {
  sideMenu.classList.add("show")
  overlay.classList.add("show")
})

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show")
  overlay.classList.remove("show")
})

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("show")
  overlay.classList.remove("show")
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

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.backgroundColor = "white"
  }
})
