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
let produit;

function stockage() {
	let voirStock = document.querySelector(".voirStock");

	let stock = JSON.parse(localStorage.getItem("Stock"));

	// On va créer la méthode forEach qui pour chaque element va :
	stock.forEach(function (element, index) {
		let section = document.querySelector(".leStock");
		produit = document.createElement("div");
		section.appendChild(produit);

		// Partie CSS pour le lead design CASSANDRA en personne
		produit.style.width = "750px";
		produit.style.height = "50px";
		produit.style.border = "2px solid black";
		produit.style.backgroundColor = "grey";
		produit.style.zIndex = "999";
		produit.style.marginBottom = "30px";
		produit.style.marginLeft = "50px";

		// Lui attribuer une valeur
		produit.innerHTML +=
			element.nom +
			" " +
			" <input class='quantite' type='number' placeholder='quantite'> " +
			element.prixAchatHt +
			" " +
			element.prixVenteHt +
			" " +
			element.tva +
			" " +
			" <button class='delBtn'>Supprimer</button> <br/>";

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
	let modifColors = document.querySelector(".quantite");

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
stockage();

let elText = document.querySelector(".elText");
function creeQRCode() {
	let elText = document.querySelector(".elText");
	elText.addEventListener("keydown", function (e) {
		// Si j'ai appuyé sur la touche entrée
		if (e.key == "Enter") {
			alert("Input a text");
		}
	});
}
creeQRCode();
let QRCode;
let qrcode = new QRCode("qrcode");

function makeCode() {
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}

	qrcode.makeCode(elText.value);
}

makeCode();

$("#text")
	.on("blur", function () {
		makeCode();
	})
	.on("keydown", function (e) {
		if (e.key == "Entrer") {
			makeCode();
		}
	});
qrcode.clear(); // clear the code.
qrcode.makeCode("http://naver.com"); // make another code.

// Function modifier la valeur à l'interieur de la liste
function modif(btnModif, li, btnSuppr, btnRayer) {
	btnModif.addEventListener("click", function () {
		// li qui était avant une liste devient un input
		li.innerHTML = "<input type='text'>";

		// On déclenche un addEvent listener sur LI devenu input qui fait que à la touche entrer:
		li.addEventListener("keydown", function (e) {
			// Si j'ai appuyé sur la touche entrée
			if (e.key == "Enter") {
				// ON PEUT DEMANDER CONFIRMATION POUR ETRE SUR QUE L'UTILISATEUR NE S'EST PAS TROMPE if(confirm(Etes vous sure ?))

				// On écrase l'input qui redevient liste et on met la valeur de l'ancien input dans la liste
				li.innerText = e.target.value;
				// Et on refait apparaître le bouton modifier
				li.appendChild(btnModif);
				// Et on refait apparaître le bouton supprimer
				li.appendChild(btnSuppr);
				// Et on refait apparaître le bouton rayer
				li.appendChild(btnRayer);
			}
		});
	});
}
