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
		document.body.appendChild(this.dom_backdrop());
	}
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
