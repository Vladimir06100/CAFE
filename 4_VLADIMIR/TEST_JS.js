"use strict";
// ! RENDU FINALE

// Input text
let nom = document.querySelector(".inputProduit");
let qteDeProduit = document.querySelector(".inputQteDeProduit");
let prixAchatHt = document.querySelector(".inputPrixAchatHt");
let prixVenteHt = document.querySelector(".inputPrixVenteHt");
let prixVenteTTC = document.querySelector(".inputPrixVenteTTC");

// Input select
let tva = document.querySelector(".choixTVA");
let boissonAlcool = document.querySelector(".choix");
let degreAlcool = document.querySelector(".degreAlcool");

// Bouton ajout au stock
let addStockInput = document.querySelector(".addStock");

let supprimer = document.querySelector(".supList");
let test = document.querySelector(".test");

let affichage = document.querySelector(".affichage");
// Le tableau
let stock = [];

/* 
function pagePrincipal() {
	// Action au click
	addStockInput.addEventListener("click", function (event) {
		// Le preventDefault est utilisé pour rester sur la même page apès click
		event.preventDefault();
		// Verification dans console.log
		console.log("verification input");
		// Verification si tout les champs sont bien remplis avec le < ! >
		// et || c'est pour dire si au moins 1 champs est vide dans ce cas afficher l'alert
		if (
			!nom.value ||
			!qteDeProduit.value ||
			!prixAchatHt.value ||
			!prixVenteHt.value ||
			!prixVenteTTC.value
		) {
			// Le message est affiché si 1 des champs est vide
			alert("Veuillez remplir les champs ci-dessous", stock);
		}

		// Si tout les champs sont remplis, le else ajoute le produit dans le stock
		else {
			console.log("avant ajout au stock du produit");
			let produit = {
				nom: nom.value,
				quantite: qteDeProduit.value,
				prixAchatHt: prixAchatHt.value,
				prixVenteHt: prixVenteHt.value,
				prixVenteTTC: prixVenteTTC.value,
				tva: tva.value,
				boisson: boissonAlcool.value,
				degre: degreAlcool.value,
			};

			// L'objet contact est push dans le tableau
			stock.push(produit);

			console.log("Après ajout du produit au stock", stock);
			nom.value = "";
			affichageTableau();
		}
	});
}
 */
//! test button supprimer

let coucou = document.querySelector(".coucou");

function supCOUCOU() {
	let avecAlcool = document.querySelector(".choix");
	avecAlcool.addEventListener("input", function (event) {
		if (avecAlcool.value == "Avec Alcool") {
			console.log("alcool");
			coucou.style.display = "none";
		} else {
			console.log("lolk");
			coucou.style.display = "";
		}
	});
}
supCOUCOU();

function changeColors() {
	let modifColors = document.querySelector(".modifQte");

	modifColors.addEventListener("input", function (e) {
		let number = parseInt(modifColors.value);
		console.log(number);
		if (number < 5) {
			console.log("Non");
			modifColors.style.backgroundColor = "#bf1515e7";
		} else {
			console.log("OUi");
			modifColors.style.backgroundColor = "#2ddd7ae7";
		}
	});
}
changeColors();

/* function sup(supprimer, test) {
	supprimer.addEventListener("click", function () {
		test.remove();
	});
}
 */
/* 
function affichageTableau() {
	test.addEventListener("click", function (event) {
		console.log("SAluttt");
		supprimer.remove();
	});
}

affichageTableau();
 */
