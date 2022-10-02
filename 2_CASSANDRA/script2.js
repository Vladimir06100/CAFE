// On reprend les meme variable sur cette page

// Les variable pour le CSS

// Input text
let nom = document.querySelector(".inputProduit");
let qteDeProduit = document.querySelector(".inputQteDeProduit");
let prixAchatHt = document.querySelector(".inputPrixAchatHt");
let prixVenteHt = document.querySelector(".inputPrixVenteHt");
let margeHt = document.querySelector(".margeHt");
let prixVenteTTC = document.querySelector(".prixVenteTTC");

// Input select
let tva = document.querySelector(".choixTva");
let boissonAlcool = document.querySelector(".choix");
let degreAlcool = document.querySelector(".degreAlcool");

function stockage() {

    let voirStock = document.querySelector(".voirStock");

    let stock = JSON.parse(localStorage.getItem("Stock"));

    // On va créer la méthode forEach qui pour chaque element va :
    stock.forEach(function (element, index) {

        let section = document.querySelector(".leStock");
        produit = document.createElement("div");
        section.appendChild(produit);

        // Partie CSS pour le lead design CASSANDRA en personne
        produit.style.width= "750px";
        produit.style.height= "50px";
        produit.style.border= "2px solid black";
        produit.style.backgroundColor= "grey";
        produit.style.zIndex= "999";
        produit.style.marginBottom= "30px";
        produit.style.marginLeft= "50px"

        // Lui attribuer une valeur
        produit.innerHTML += element.nom + " " + element.qteDeProduit + " " + element.prixAchatHt + " " + element.prixVenteHt + " " + element.tva + " " + " <button class='delBtn'>Supprimer</button> <br/>";
    });

    forEach(stock);
}

function forEach(stock) {
		  
	// DECLENCHER UN FOR EACH QUI FAIT QUE POUR CHAQUE BUTTON ON VA FAIRE UNE ACTION
	// RECUPERATION DE TOUT LES BUTTONS CREER AU DESSUS
  
	let buttons = document.querySelectorAll(".delBtn");
  
	buttons.forEach(function (button, index) {
	    // Pour chaque button on va :
		button.addEventListener("click", function () {
			// supprimer dans le tableau des contact l'index une fois
			console.log("tableauAvant", stock);

            localStorage.removeItem("Stock");
			button.parentElement.remove();

            //console.log("effacé",button.parentElement);
	
			console.log("tableauAprèsSuppression", stock);
		});
	});
}

stockage();