/* Exemple API avec XMLHttpRequest
TODO: modulariser en fonctions */

// références au DOM
const searchInputElement = document.getElementById("tags");
const buttonElement = document.getElementById("button");
const resultsListElement = document.getElementById("resultats");

// LA liste
let gifUrls = [];

// ------------------- DOM -----------------------------------------------------

// on attache une fonction de callback au bouton
buttonElement.addEventListener("click", () => {
  // on réinitialise la liste de résultats
  gifUrls = [];
  // et le DOM
  resultsListElement.innerHTML = "";

  // on récupère les termes de la recherche
  const tags = searchInputElement.value;

  // ----------------------------- AJAX --------------------------------------
  // nouvelle instance XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // parmaétrage de la requête
  const methode = "GET";
  const baseURL = "https://api.giphy.com/v1/gifs/search"; // API
  const apiKey = ""; // 😱
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
      const reponse = JSON.parse(xhr.responseText);
      // les GIF c'est lourd, on se limite à 3
      const gifsList = reponse.data.slice(0, 3);

      // parcours de la liste d'objets JS
      for (const gifData of gifsList) {
        const gifUrl = gifData.images.downsized.url;
        gifUrls.push(gifUrl);
        // manipulation du DOM
        // test <img>
        const imgElement = document.createElement('img');
        imgElement.src = gifUrl;
        imgElement.alt = tags;
        // création d'un élément <li>
        const liElement = document.createElement('li');
        liElement.appendChild(imgElement);
        // mise à jour de l'élément <ul> dans le DOM
        resultsListElement.appendChild(liElement);
      }

      console.log(gifUrls);
    }
  }

  // enfin on n'oublie pas d'envoyer la requête !
  xhr.send();
});