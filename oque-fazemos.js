document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('header')) {
    fetch('header.html')
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



document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('footer')) {
    fetch('footer.html')
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