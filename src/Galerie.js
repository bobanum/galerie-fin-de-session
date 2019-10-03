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
				var leLienCourant = e.currentTarget;
				this.afficherBackdrop(leLienCourant);
			});
		}
	}
	/**
	 * Supprime le backdrop affiché
	 */
	static supprimerBackdrop() {
		// On retire le backdrop existant s'il y en a un
		if (this.backdrop) {
			this.backdrop.parentNode.removeChild(this.backdrop);
			this.backdrop = null;
		}
	}
	/**
	 * Affiche le backdrop en fonction du lien donné
	 * S'assure de supprimer l'ancien backdrop
	 */
	static afficherBackdrop(lien) {
		// On retire le backdrop existant s'il y en a un
		this.supprimerBackdrop();
		// On ajoute le nouveau backdrop en le gardant en mémoire
		this.backdrop = this.dom_backdrop(lien);
		document.body.appendChild(this.backdrop);
	}
	/**
	 * Retourne la structure HTML d'un backdrop sans les variables.
	 * @returns HTMLElement
	 */
	static dom_backdrop(lien) {
		var adresse = lien.getAttribute("href");
		var legende = lien.getAttribute("alt");
		var resultat = document.createElement("div");
		resultat.setAttribute("id", "backdrop")
		var close = resultat.appendChild(this.dom_close());
		var precedent = resultat.appendChild(this.dom_precedent());
		var diapo = resultat.appendChild(this.dom_diapo(adresse, legende));
		var suivant = resultat.appendChild(this.dom_suivant());
		// Pour supprimer le backdrop quand on clique dans le gris
		resultat.addEventListener("click", e => {
			e.stopPropagation();
			this.supprimerBackdrop();
		});
		return resultat;
	}
	/**
	 * Retourne l'élément HTML du bouton close
	 * @returns HTMLElement;
	 */
	static dom_close() {
		var resultat = document.createElement("span");
		resultat.classList.add("close");
		resultat.innerHTML = "&#x2716;";
		// Pour supprimer le backdrop quand on clique dans le bouton
		resultat.addEventListener("click", e => {
			e.stopPropagation();
			this.supprimerBackdrop();
		});
		return resultat;
	}
	/**
	 * Retourne l'élément HTML du bouton precedent
	 * @returns HTMLElement;
	 */
	static dom_precedent() {
		var resultat = document.createElement("span");
		resultat.classList.add("precedent");
		resultat.innerHTML = "&#x276e;";
		return resultat;
	}
	/**
	 * Retourne l'élément HTML du bouton suivant
	 * @returns HTMLElement;
	 */
	static dom_suivant() {
		var resultat = document.createElement("span");
		resultat.classList.add("suivant");
		resultat.innerHTML = "&#x276f;";
		return resultat;
	}
	/**
	 * Retourne l'élément HTML de la diapo <figure>
	 * @param {string} adresse - L'Adresse de l'image
	 * @param {string} legende - Le texte du figcaption
	 * @returns HTMLElement;
	 */
	static dom_diapo(adresse, legende) {
		var resultat = document.createElement("figure");
		resultat.classList.add("diapo");
		var image = document.createElement("img");
		image.setAttribute("src", adresse);
		image.setAttribute("alt", legende);
		resultat.appendChild(image);
		var figcaption = document.createElement("figcaption");
		figcaption.innerHTML = legende;
		resultat.appendChild(figcaption);
		// Pour éviter de supprimer le backdrop (quand on clique dans l'image')
		resultat.addEventListener("click", e => {
			e.stopPropagation();
		});
		return resultat;
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
