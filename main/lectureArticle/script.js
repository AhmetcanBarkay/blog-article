//Le stockage est engistrée sous format JSON string, on le retraduit en format objet.
//Dans le cas ya rien, on fais en sorte de l'initialisé a une array(liste) vide
const stockage = localStorage.hasOwnProperty('stockage') ? JSON.parse(localStorage.getItem('stockage')) : [];

//Cette page est normalement chargée avec le paramétre "indice" signifant l'artcile désirée.
const params = new URLSearchParams(window.location.search);
const articleSouhaite = stockage[params.get("indice")];

console.log(articleSouhaite);