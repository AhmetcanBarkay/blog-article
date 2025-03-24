function soumettre() {
    const nouvelArticle = {
        titre: document.getElementById('titreArticle').value,
        description: document.getElementById('descriptionArticle').value,
        contenu: document.getElementById('contenuArticle').value,
        auteur: document.getElementById('auteurArticle').value,
        dateAjout: new Date
    };
    //Le stockage est engistrée sous format JSON string, on le retraduit en format objet.
    //Dans le cas ya rien, on fais en sorte de l'initialisé a une array(liste) vide
    const stockage = localStorage.hasOwnProperty('stockage') ? JSON.parse(localStorage.getItem('stockage')) : [];

    stockage.push(nouvelArticle);

    //engistrement dans localStorage
    localStorage.setItem('stockage', JSON.stringify(stockage));

    window.location.href = "../index.html"; // retourne page accueil
    return false; // On évite l'envoie automatique lors du submit..
};