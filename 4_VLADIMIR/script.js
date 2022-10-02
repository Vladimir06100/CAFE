"use strict";
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
		console.log("verification input");

		// Verification si tout les champs sont bien remplis avec le < ! >
		// et || c'est pour dire si au moins 1 champs est vide dans ce cas afficher l'alert
		if (
			!nom.value ||
			!qteDeProduit.value ||
			!prixAchatHt.value ||
			!prixVenteHt.value ||
			!tva.value ||
			!boissonAlcool.value ||
			!prixVenteTTC.value
		) {
			// Le message est affiché si 1 des champs est vide
			alert("Veuillez remplir les champs ci-dessous", stock);
		}

		// Si tout les champs sont remplis, le else ajoute le produit dans le stock
		else {
			console.log("avant ajout du produit au stock", stock);

			// TTC
			let TTC =
				Number(prixVenteHt.value) * Number(tva.value) +
				Number(prixVenteHt.value);

			// Marge HT
			let marge = Number(prixVenteHt.value) - Number(prixAchatHt.value);

			// Integration du TTC //
			let paragraphe = document.createElement("p");
			prixVenteTTC.appendChild(paragraphe);

			paragraphe.innerText = "Prix TTC : " + TTC;

			// Integration marge HT //
			let paragraphe2 = document.createElement("p");
			margeHt.appendChild(paragraphe2);

			paragraphe2.innerText = "Marge HT : " + marge;

			// Liste des champs remplis à ajouter dans le stock
			let produit = {
				nom: nom.value,
				quantite: qteDeProduit.value,
				prixAchatHt: prixAchatHt.value,
				prixVenteHt: prixVenteHt.value,
				//TTC: ,
				tva: tva.value,
				boisson: boissonAlcool.value,
				degre: degreAlcool.value,
			};

			// L'objet produit est ajouté dans le stock
			stock.push(produit);

			// Et le stock dans le local storage
			localStorage.setItem("Stock", JSON.stringify(stock));

			console.log("Après ajout du produit au stock", stock);
			//nom.value= "";
			prixVenteHt.value = "";
			//prixVenteTTC.removeChild();
			tva.value = "";
		}
	});

	function supDegreAlcool() {
		let choix = document.querySelector(".choix");
		choix.addEventListener("input", function (event) {
			if (choix.value == "avec") {
				console.log("alcool");
				degreAlcool.style.display = "none";
			} else {
				console.log("lolk");
				degreAlcool.style.display = "";
			}
		});
	}
	supDegreAlcool();
}
pagePrincipal();
