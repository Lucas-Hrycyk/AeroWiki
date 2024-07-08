document.addEventListener('DOMContentLoaded', function() {
  var menuDiv = document.getElementById('menu');
  menuDiv.classList.add('hidden');
  
  document.getElementById('toggleNavButton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });

  fetch('/AeroWiki/Views/Geral/MenuPrincipal.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu').innerHTML = data;

      document.getElementById('toggleNavButtonPhone').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
      });

      document.getElementById('FecharMenu').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.add('hidden'); 
      });



    });

  fetch('/AeroWiki/Views/Geral/Footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});