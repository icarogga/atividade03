document.getElementById('cta-button').addEventListener('click', function() {
    alert('Obrigado por seu interesse! Em breve entraremos em contato com mais informações.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar código para enviar o formulário via AJAX ou outra funcionalidade
});
