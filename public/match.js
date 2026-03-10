function getPlayers() {
    let players = localStorage.getItem("players");
    if (players == null) {
        return [];
    } else {
        return JSON.parse(players);
    }
}
function getReferees() {
    let referees = localStorage.getItem("referees");
    if (referees == null) {
        return [];
    } else {
        return JSON.parse(referees);
    }
}
function getRooms() {
    let rooms = localStorage.getItem("rooms");
    if (rooms == null) {
        return [];
    } else {
        return JSON.parse(rooms);
    }
}
function getMatchs() {
    let matchs = localStorage.getItem("matchs");
    if (matchs == null) {
        return [];
    } else {
        return JSON.parse(matchs);
    }
}
function addMatch(match) {
    let matchs = getMatchs();
    matchs.push(match);
    saveMatchs(matchs);
}
function saveMatchs(matchs) {
    localStorage.setItem("matchs", JSON.stringify(matchs));
}
function setPlayers(sex){
    $('#player1').empty();
    $('#player2').empty();
    const playerSelect1 = document.getElementById("player1");
    const playerSelect2 = document.getElementById("player2");
    const savedPlayers = getPlayers();
    for (let i = 0; i < savedPlayers.length; i++){
        if (savedPlayers[i].sex === sex){
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            option1.textContent = savedPlayers[i].firstname + ' ' + savedPlayers[i].lastname;
            option2.textContent = savedPlayers[i].firstname + ' ' + savedPlayers[i].lastname;
            playerSelect1.appendChild(option1);
            playerSelect2.appendChild(option2);
        }
    }
}

// Fonction pour vérifier si deux joueurs sélectionnés sont les mêmes
function arePlayersDifferent(player1, player2) {
    return player1 !== player2;
}

// Fonction pour enregistrer un match
$("#register-match-button").click(function () {
    // Récupérer les valeurs sélectionnées dans les listes déroulantes
    const player1 = $('#player1').val();
    const player2 = $('#player2').val();

    // Vérifier si les joueurs sélectionnés sont différents
    if (!arePlayersDifferent(player1, player2)) {
        alert("Vous ne pouvez pas enregistrer un match entre un joueur et lui-même.");
        return; // Arrêter l'exécution de la fonction si les joueurs sont les mêmes
    }

    // Si les joueurs sont différents, vous pouvez continuer avec l'enregistrement du match
    // Code pour enregistrer le match ici...
});

$(document).ready(function(){
    setPlayers('H');
    const refereeSelect = document.getElementById("referee");
    const savedReferees = getReferees();
    for (let i = 0; i < savedReferees.length; i++) {
        const option = document.createElement("option");
        option.textContent = savedReferees[i].firstname + ' ' + savedReferees[i].lastname;
        refereeSelect.appendChild(option);
    }
    const roomSelect = document.getElementById("room");
    const savedRooms = getRooms();
    for (let i = 0; i < savedRooms.length; i++){
        const option = document.createElement("option");
        option.textContent = savedRooms[i].name;
        roomSelect.appendChild(option);
    }
    const matchList = document.getElementById("match-list");
    const savedMatchs = getMatchs();
    for (let i = 0; i < savedMatchs.length; i++) {
        let li1 = document.createElement('li');
        li1.textContent = "Simple " + savedMatchs[i].sex + ' ' +savedMatchs[i].date;
        matchList.appendChild(li1);
        let li2 = document.createElement('li');
        li2.textContent = savedMatchs[i].room;
        matchList.appendChild(li2);
        let li3 = document.createElement('li');
        li3.textContent =  savedMatchs[i].player1 + " vs " + savedMatchs[i].player2;
        matchList.appendChild(li3);
        let li4 = document.createElement('li');
        li4.textContent = "Arbitre : " + savedMatchs[i].referee;
        matchList.appendChild(li4);
        let li5 = document.createElement('li');
        li5.textContent = "";
        matchList.appendChild(li5);
    }
    $("#match-form").submit(function () {
        // Récupérer les valeurs du formulaire
        const player1 = $('#player1').val();
        const player2 = $('#player2').val();
        // Vérifier si les joueurs sélectionnés sont différents
        if (!arePlayersDifferent(player1, player2)){
            alert("Vous ne pouvez pas enregistrer un match entre un joueur et lui-même.");
            return;
        }
        const referee = $('#referee').val();
        const sex = $('input[name=sex]:checked').val();
        const room = $('#room').val();
        const date = $('#date').val();
        const matchInfo = {"sex" : sex, "player1": player1, "player2": player2, "referee": referee, "room": room,
            "date": date};
        addMatch(matchInfo);
    });
});
