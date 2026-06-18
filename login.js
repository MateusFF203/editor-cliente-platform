document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Simulação: aqui você pode adicionar lógica real, como checar no backend
    // ou no localStorage se as credenciais são válidas.
    // Por exemplo, vamos salvar o e-mail no localStorage.
    
    localStorage.setItem('emailUsuario', email);

    // Redirecionar para a home ou perfil
    window.location = 'index.html';
});
