"use strict";
// On reprend les meme variable sur cette page

// Les variable pour le CSS

// Input text

let nom = document.querySelector(".inputProduit");
let qteDeProduit = document.querySelector(".inputQteDeProduit");
let prixAchatHt = document.querySelector(".inputPrixAchatHt");
let prixVenteHt = document.querySelector(".inputPrixVenteHt");
let margeHt = document.querySelector(".margeHt");
let prixVenteTTC = document.querySelector(".prixVenteTTC");

// Titre
let titre = document.querySelector("h2");
titre.style.textAlign= "center";

// Bordereau
let bordero = document.querySelector(".bordero");
bordero.style.marginLeft= "auto";
bordero.style.marginRight= "auto";
bordero.style.width= "950px";

// Les categories
let categorie = document.querySelector(".categorie");
categorie.style.display= "flex";
categorie.style.height = "47px";
categorie.style.boxShadow = "1px 1px 3px black";
categorie.style.backgroundColor = "#EEE6E4";
categorie.style.marginBottom= "30px";
categorie.style.fontSize = "1rem";

// Les titres
let A = document.querySelector("#A");
A.style.marginLeft= "60px";
let B = document.querySelector("#B");
B.style.marginLeft= "95px";
let C = document.querySelector("#C");
C.style.marginLeft= "30px";
let D = document.querySelector("#D");
D.style.marginLeft= "30px";
let E = document.querySelector("#E");
E.style.marginLeft= "30px";
let F = document.querySelector("#F");
F.style.marginLeft= "42px";
let G = document.querySelector("#G");
G.style.marginLeft= "53px";

// Input select
let tvaProduit = document.querySelector(".choixTva");
let boissonAlcool = document.querySelector(".choix");
let degreAlcool = document.querySelector(".degreAlcool");
let produit;
let ajoutProduit;
let qteProduit;
let achatProd;
let venteProd;
let tvaProd;
let btnModifier;
let btnSupprimer;
let choixAlco;
let venteTTC;

function stockage() {
	//let voirStock = document.querySelector(".voirStock");

	let stock = JSON.parse(localStorage.getItem("Stock"));

	// On va créer la méthode forEach qui pour chaque element va :
	stock.forEach(function (element, index) {

		let section = document.querySelector(".leStock");
		
		produit = document.createElement("div");
		section.appendChild(produit);

		// style principal
		produit.style.display = "flex";
		produit.style.minWidth = "600px";
		produit.style.width = "950px";
		produit.style.height = "47px";
		produit.style.boxShadow = "1px 1px 3px black";
		produit.style.backgroundColor = "#EEE6E4";
		produit.style.marginBottom = "30px";
		produit.style.marginLeft = "auto";
		produit.style.marginRight = "auto";
		produit.style.fontSize = "1.5rem";
		produit.style.borderRadius = "5px";
		produit.style.display = "flex";
		produit.style.color = "#52352b";

		ajoutProduit = document.createElement("div");
		produit.appendChild(ajoutProduit);

		ajoutProduit.innerHTML +=" <input class='quantiteA' type='text'> ";

		let quantite = document.querySelector(".quantiteA");
		quantite.style.marginLeft = "25px";
		quantite.style.marginTop = "11px";
		quantite.style.width= "100px";

		choixAlco = document.createElement("div");
		produit.appendChild(choixAlco);

		choixAlco.innerHTML += element.boisson;

		choixAlco.style.marginLeft = "65px";
		choixAlco.style.marginTop = "8px";

		qteProduit = document.createElement("div");
		produit.appendChild(qteProduit);

		qteProduit.innerHTML += " <input class='quantiteB' type='number'> ";

		let btnQté = document.querySelector(".quantiteB");
		btnQté.style.width = "40px";
		btnQté.style.marginLeft = "65px";
		btnQté.style.marginTop = "11px";

		achatProd = document.createElement("div");
		produit.appendChild(achatProd);

		achatProd.innerHTML += element.prixAchatHt;

		achatProd.style.marginLeft = "45px";
		achatProd.style.marginTop = "8px";

		venteProd = document.createElement("div");
		produit.appendChild(venteProd);

		venteProd.innerHTML += element.prixVenteHt;

		venteProd.style.marginLeft = "50px";
		venteProd.style.marginTop = "8px";

		tvaProd = document.createElement("div");
		produit.appendChild(tvaProd);

		tvaProd.innerHTML += element.tva;

		tvaProd.style.marginLeft = "50px";
		tvaProd.style.marginTop = "8px";
		
		venteTTC = document.createElement("div");
		produit.appendChild(venteTTC);

		venteTTC.innerHTML += element.ttc;

		venteTTC.style.marginLeft = "50px";
		venteTTC.style.marginRight = "60px";
		venteTTC.style.marginTop = "8px";
		
		// Bouton supprimer 
		produit.innerHTML += " <button class='delBtn'>Supprimer</button> <br/>";
		let supprimak = document.querySelector(".delBtn");
		supprimak.style.color= "white";

		// Bouton modifier non fonctionnel
		produit.innerHTML += " <button class='change'>Modifier</button> <br/>";
		let modifiak = document.querySelector(".change");
		modifiak.style.marginLeft= "20px";
		modifiak.style.color= "white";

		changeColors();
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

function changeColors() {
	let modifColors = document.querySelector(".quantiteB");

	modifColors.addEventListener("input", function (e) {
		let number = parseInt(modifColors.value);
		console.log(number);
		if (number < 5) {
			console.log("Non");
			modifColors.style.backgroundColor = "#bf1515e7";
		} else {
			console.log("Oui");
			modifColors.style.backgroundColor = "#2ddd7ae7";
		}
	});
}

stockage();
