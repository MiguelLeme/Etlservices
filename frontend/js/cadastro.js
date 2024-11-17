document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var errorMessage = document.getElementById('error-message');

    if (email !== confirmEmail) {
        errorMessage.textContent = 'Emails do not match. Please check and try again.';
        event.preventDefault(); // Impede o envio do formulário
    } else {
        errorMessage.textContent = ''; // Limpa a mensagem de erro se os emails forem iguais
    }
});
