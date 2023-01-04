// Recupera o elemento form pelo seu ID
var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Limpa os campos de entrada manualmente
      var inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(function(input) {
        input.value = '';
      });
    }
    form.classList.add('was-validated');
  }, false);