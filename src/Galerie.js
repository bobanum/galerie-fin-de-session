/*jslint esnext:true, browser:true*/
/**
 * @module Galerie
 */
export default class Galerie {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		this.app = document.getElementById("app");
		this.galerie = document.getElementById("galerie");
		// document.body.appendChild(this.dom_backdrop());
		this.ajouterClickImages();
	}
	/**
	 * Ajoute à chacune des images un événement "click" pour afficher le backdrop
	 * @static
	 * @returns
	 */
	static ajouterClickImages() {
		var desLiens = this.galerie.querySelectorAll("a");
		desLiens = Array.from(desLiens);
		for (let i = 0; i < desLiens.length; i += 1) {
			let unLien = desLiens[i];
			unLien.addEventListener("click", e => {
				e.preventDefault();
				var leLien = e.currentTarget;
				console.log("On a cliqué sur un lien (image).", leLien.getAttribute("href"));
			});
		}
	}
	/**
	 * Retourne la structure HTML d'un backdrop sans les variables.
	 */
	static dom_backdrop() {
		// 	<div 
		var resultat = document.createElement("div");
		// 	id="backdrop">
		resultat.setAttribute("id", "backdrop");
		// 	<span 
		var close = document.createElement("span");
		// 	class="close">
		close.classList.add("close");
		// 	&#x2716;</span>
		close.innerHTML = "&#x2716;";
		resultat.appendChild(close);
		// 	<span 
		var precedent = document.createElement("span");
		// 	class="precedent">
		precedent.classList.add("precedent");
		// 	&#x276e;</span>
		precedent.innerHTML = "&#x276e;";
		resultat.appendChild(precedent);
		// 	<figure 
		var diapo = document.createElement("figure");
		//  class="diapo">
		diapo.classList.add("diapo");
		resultat.appendChild(diapo);
		// 	<img 
		var image = document.createElement("img");
		//  src="images/niche.jpg" 
		image.setAttribute("src", "images/niche.jpg");
		//  alt="Chien dans sa niche" />
		image.setAttribute("alt", "Chien dans sa niche");
		diapo.appendChild(image);
		// 	<figcaption>
		var figcaption = document.createElement("figcaption");
		// 	Chien dans sa niche</figcaption>
		figcaption.innerHTML = "Chien dans sa niche";
		diapo.appendChild(figcaption);
		// 	</figure>
		// 	<span 
		var suivant = document.createElement("span");
		// 	class="suivant">
		suivant.classList.add("suivant");
		// 	&#x276f;</span>
		suivant.innerHTML = "&#x276f;";
		resultat.appendChild(suivant);
		// </div>	
		return resultat	;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
