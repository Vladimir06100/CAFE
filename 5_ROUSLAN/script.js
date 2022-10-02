// ! RENDU FINALE

// Input text
let nom = document.querySelector(".inputProduit");
let qteDeProduit = document.querySelector(".inputQteDeProduit");
let prixAchatHt = document.querySelector(".inputPrixAchatHt");
let prixVente = document.querySelector(".inputPrixVenteHt");
let prixVenteTTC = document.querySelector(".inputPrixVenteTTC");

// Input select
let tva = document.querySelector(".choixTVA");
let boissonAlcool = document.querySelector(".choix");
let degreAlcool = document.querySelector(".degreAlcool");

// Bouton ajout au stock
let addStockInput = document.querySelector(".addStock");

// Le tableau
let stock = [];

function pagePrincipal() {
	// Action au click
	addStockInput.addEventListener("click", function (event) {
		// Le preventDefault est utilisé pour rester sur la même page apès click
		event.preventDefault();

		// Verification dans console.log
		console.log("avant ajout", stock);

		// Verification si tout les champs sont bien remplis avec le < ! >
		// et || c'est pour dire si au moins 1 champs est vide dans ce cas afficher l'alert
		if (
			!nom.value ||
			!qteDeProduit.value ||
			!prixAchatHt.value ||
			!prixVente.value ||
			!prixVenteTTC.value
		) {
			// Le message est affiché si 1 des champs est vide
			alert("Veuillez remplir les champs ci-dessous");
		}

		// Si tout les champs sont remplis, le else ajoute le produit dans le stock
		else {
		}
	});
}

pagePrincipal();
