function soumettre() {
    const nouvelArticle = {
        titre: document.getElementById('titreArticle').value,
        description: document.getElementById('descriptionArticle').value,
        contenu: document.getElementById('contenuArticle').value,
        auteur: document.getElementById('auteurArticle').value,
        dateAjout: Date.now()
    };

    let stockage = localStorage.getItem('stockage');
    if (stockage) {
        //Le stockage est engistrée sous format JSON string, on le retraduit en format objet.
        stockage = JSON.parse(stockage)
    } else stockage = [];
    stockage.push(nouvelArticle);

    //engistrement dans localStorage
    localStorage.setItem('stockage', JSON.stringify(stockage));

    window.location.href = "../index.html"; // retourne page accueil
    return false; // On évite l'envoie automatique lors du submit..
};