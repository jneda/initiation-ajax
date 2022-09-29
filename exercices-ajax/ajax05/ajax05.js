/* Exemple API avec XMLHttpRequest
TODO: modulariser en fonctions */

// références au DOM
const searchInputElement = document.getElementById("tags");
const buttonElement = document.getElementById("button");
const resultsListElement = document.getElementById("resultats");

// LA liste (pour console.log)
let gifUrls = [];

// ------------------- DOM -----------------------------------------------------

// on attache une fonction de callback au bouton
buttonElement.addEventListener("click", () => {
  // on réinitialise la liste de résultats
  gifUrls = [];
  // et le DOM
  resultsListElement.innerHTML = "";

  // on récupère les termes de la recherche depuis l'élément <input>
  const tags = searchInputElement.value;

  // ----------------------------- AJAX --------------------------------------
  // nouvelle instance XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // parmaétrage de la requête
  const methode = "GET";
  const baseURL = "https://api.giphy.com/v1/gifs/search"; // API
  const apiKey = "8RLMe1haihYSVrXQpM2VHJ6L3uoUPsms"; // 😱
  const lang = "fr";
  
  const url = baseURL + "?api_key=" + apiKey + "&lang=" + lang +
    "&q=" + encodeURIComponent(tags);

  xhr.open(methode, url);

  // definition de la fonction de callback pour
  // le gestionnaire d'événement onreadystatechange
  xhr.onreadystatechange = function () {
    // on lit la propriété readyState de l'objet pour connaître le statut
    // de la requête
    // cf.
    //https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState

    // tout le traitement se fait ici, après que la requête est terminée
    // (i.e. après que la réponse a été entièrement reçue)

    if (xhr.readyState === XMLHttpRequest.DONE) {
      // on récupère une chaîne de caractères qu'on convertit en Object
      // grâce à la méthode JSON.parse() fournie par le navigateur
      const reponse = JSON.parse(xhr.responseText);

      // regardons dans la console la tête de ces données
      console.log("reponse :");
      console.dir(reponse);

      // les GIF c'est lourd, on se limite ici aux 3 premiers de la liste
      // contenue dans la propriété data de l'Object
      const gifsList = reponse.data.slice(0, 3);

      // parcours de l'Array' d'Objects JS
      for (const gifData of gifsList) { // parcours d'Array grâce à for ... of
        // on va chercher la propriété qui nous intéresse
        // ici c'est la propriété url de l'objet downsized
        // lui-même propriété de l'objet images
        // lui-même propriété de l'objet gifData contenant les données du GIF
        // (ouf...)
        const gifUrl = gifData.images.downsized.url;

        gifUrls.push(gifUrl); // pour console.log

        // manipulation du DOM

        // on crée un élément HTML <img>
        const imgElement = document.createElement('img');
        // on affecte à ses attributs les valeurs pertinentes
        // URL de l'image pour l'afficher
        imgElement.src = gifUrl;
        // les termes de la recherche en guise de texte par défaut
        imgElement.alt = tags;

        // création d'un élément <li> pour contenir l'élément <img>
        const liElement = document.createElement('li');

        // on lui ajoute en tant qu'enfant l'élément <img>
        liElement.appendChild(imgElement); 

        // en on l'ajoute en tant qu'enfant de l'élément <ul>
        resultsListElement.appendChild(liElement);
      }

      // on affiche les données reçues de l'API dans la console
      // pour notre édification personnelle
      console.log(`liste des URLs utilisées pour le DOM : ${gifUrls}`); 
    }
  }

  // enfin on n'oublie pas d'envoyer la requête !
  xhr.send();
});