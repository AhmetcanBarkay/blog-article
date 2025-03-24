const elementNombreArticle = document.getElementById('nombreArticle');

//Le stockage est engistrée sous format JSON string, on le retraduit en format objet.
//Dans le cas ya rien, on fais en sorte de l'initialisé a une array(liste) vide
const stockage = localStorage.hasOwnProperty('stockage') ? JSON.parse(localStorage.getItem('stockage')) : [];
elementNombreArticle.innerText = stockage.length;

const elementArticlesConteneur = document.getElementById('articles');
stockage.forEach((article, indice) => {
    const elementArticle = document.createElement('article');
    elementArticle.onclick = function () {
        location.href = `lectureArticle/lectureArticle.html?indice=${indice}`
    };
    const elementTitre = document.createElement('h3');
    elementTitre.innerText = article.titre;

    const elementDescription = document.createElement('h4');
    elementDescription.innerText = article.description;

    const elementAuteur = document.createElement('h4');
    elementAuteur.innerText = `Par : ${article.auteur}`;

    const elementDateAjout = document.createElement('h5');

    const dateObjet = new Date(article.dateAjout);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateFromat = dateObjet.toLocaleDateString('fr-FR', options);
    const tempsFormat = dateObjet.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    elementDateAjout.innerText = `Postée le ${dateFromat} à  ${tempsFormat}`;

    elementArticle.append(elementTitre, elementDescription, elementAuteur, elementDateAjout);
    elementArticlesConteneur.append(elementArticle);
});