function getReferees() {
    let referees = localStorage.getItem("referees");
    if (referees == null) {
        return [];
    } else {
        return JSON.parse(referees);
    }
}

// Fonction pour ajouter un nouveau arbitre à la liste
function addReferee(referee) {
    let referees = getReferees();
    referees.push(referee);
    saveReferees(referees);
}

// Fonction pour enregistrer les arbitres dans le localStorage
function saveReferees(referees) {
    localStorage.setItem("referees", JSON.stringify(referees));
}

$(document).ready(function(){

    // Récupérer la liste des arbitres déjà enregistrés et les afficher
    const refereeList = document.getElementById("referee-list");
    const savedReferees = getReferees();
    for (let i = 0; i < savedReferees.length; i++) {
        const li = document.createElement('li');
        li.textContent = savedReferees[i].firstname + ' ' +savedReferees[i].lastname;
        refereeList.appendChild(li);
    }
    // Ajouter un nouveau arbitre lorsque le bouton est cliqué
    $("#referee-form").submit(function () {
        // Récupérer les valeurs du formulaire
        const lastname = $('#lastname').val();
        const firstname = $('#firstname').val();
        const country = $('#country').val();
        const level = $('#level').val();

        // Créer une chaîne représentant le arbitre
        const refereeInfo = {"lastname": lastname, "firstname": firstname, "level": level, "country": country};

        // Ajouter le nouveau arbitre à la liste des arbitres enregistrés
        addReferee(refereeInfo);
    });
});