function getPlayers() {
    let players = localStorage.getItem("players");
    if (players == null) {
        return [];
    } else {
        return JSON.parse(players);
    }
}

// Fonction pour ajouter un nouveau joueur à la liste
function addPlayer(player) {
    let players = getPlayers();
    players.push(player);
    savePlayers(players);
}

// Fonction pour enregistrer les joueurs dans le localStorage
function savePlayers(players) {
    localStorage.setItem("players", JSON.stringify(players));
}

$(document).ready(function(){
    // Récupérer la liste des joueurs déjà enregistrés et les afficher
    const playerList = document.getElementById("player-list");
    const savedPlayers = getPlayers();
    for (let i = 0; i < savedPlayers.length; i++) {
        const li = document.createElement('li');
        li.textContent = savedPlayers[i].firstname + ' ' + savedPlayers[i].lastname;
        playerList.appendChild(li);
    }

    // Ajouter un nouveau joueur lorsque le bouton est cliqué
    $("#player-form").submit(function () {
        // Récupérer les valeurs du formulaire
        const lastname = $('#lastname').val();
        const firstname = $('#firstname').val();
        const sex = $('input[name=sex]:checked').val();
        const country = $('#country').val();

        // Créer une chaîne représentant le joueur
        const playerInfo = {"lastname": lastname, "firstname": firstname, "sex": sex, "country": country};

        // Ajouter le nouveau joueur à la liste des joueurs enregistrés
        addPlayer(playerInfo);
    });
});