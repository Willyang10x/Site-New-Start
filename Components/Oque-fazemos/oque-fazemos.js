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
      })
      .catch(error => console.error(error));
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