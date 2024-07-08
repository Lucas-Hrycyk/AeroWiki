document.addEventListener('DOMContentLoaded', function() {
    var menuDiv = document.getElementById('Form');
    menuDiv.classList.add('hidden');

    document.getElementById('MenuCadastro').addEventListener('click', function() {
    var menu = document.getElementById('Form');
    menu.classList.toggle('hidden');
    });

    fetch('/AeroWiki/Views/Geral/Cadastro.html')
    .then(response => response.text())
    .then(data => {
    var formulario = document.getElementById('Form').innerHTML = data;

    formulario.addEventListener('click', function() {
    var form = document.getElementById('Form');
    form.classList.toggle('hidden');
    });
    });
});
