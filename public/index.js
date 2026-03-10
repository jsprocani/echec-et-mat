$(document).ready(function(){
    $('#login-button').click(function (event) {
        event.preventDefault(); // Empêche le formulaire d'être soumis normalement
        const username = $('#username').val();
        //const password = $('#password').val();
        // Vérifier si le nom d'utilisateur ne contient que des lettres de l'alphabet
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(username)) {
            $('#username-error').text('Le nom d\'utilisateur ne doit contenir que des lettres de l\'alphabet.');
            return;
        }
        // Si la validation est réussie, vous pouvez envoyer le formulaire à votre serveur pour l'authentification
        // Rediriger vers une autre page après connexion
        window.location.href = 'home.html'; // Remplacer 'dashboard.html' par le chemin de la page de destination
    });
});
