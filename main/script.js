let elementNombreArticle = document.getElementById('nombreArticle');

let stockage = localStorage.getItem('stockage');
if (stockage) {
    //Le stockage est engistrée sous format JSON string, on le retraduit en format objet.
    stockage = JSON.parse(stockage)
} else stockage = [];

elementNombreArticle.innerText = stockage.length;