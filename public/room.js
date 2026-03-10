function getRooms() {
    let rooms = localStorage.getItem("rooms");
    if (rooms == null) {
        return [];
    } else {
        return JSON.parse(rooms);
    }
}

// Fonction pour ajouter une nouvelle salle à la liste
function addRoom(room) {
    let rooms = getRooms();
    rooms.push(room);
    saveRooms(rooms);
}

// Fonction pour enregistrer les salles dans le localStorage
function saveRooms(rooms) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
}

$(document).ready(function(){
    // Récupérer la liste des salles déjà enregistrées et les afficher
    const roomList = document.getElementById("room-list");
    const savedRooms = getRooms();
    for (let i = 0; i < savedRooms.length; i++) {
        const li = document.createElement('li');
        li.textContent = savedRooms[i].name;
        roomList.appendChild(li);
    }
    // Ajouter une nouvelle salle lorsque le formulaire est soumis
    $("#room-form").submit(function() {
        //event.preventDefault(); // Empêcher le formulaire d'être soumis normalement

        // Récupérer les valeurs du formulaire
        const roomName = $('#roomName').val();
        const location = $('#location').val();
        const capacity = $('#capacity').val();

        // Créer une chaîne représentant la salle
        const roomInfo = {"name": roomName, "location": location, "capacity": capacity};

        // Ajouter la nouvelle salle à la liste
        //$("#room-list").append("<li>" + roomInfo + "</li>");

        // Ajouter la nouvelle salle à la liste des salles enregistrées
        addRoom(roomInfo);

        // Réinitialiser le formulaire
        //$('#room-form')[0].reset();
    });
});