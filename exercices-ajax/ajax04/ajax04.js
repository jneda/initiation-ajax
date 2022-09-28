/* Exemple API avec XMLHttpRequest */

// nouvelle instance XMLHttpRequest
const xhr = new XMLHttpRequest();

// parmaétrage de la requête
const methode = "GET";
const _URL = "https://httpbin.org/ip"; // API

xhr.open(methode, _URL);

// definition de la fonction de callback pour
// le gestionnaire d'événement onreadystatechange
xhr.onreadystatechange = function () {
  // on lit la propriété readyState de l'objet pour connaître le statut
  // de la requête
  // cf. https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState

  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("réponse du serveur : ", xhr.responseText);
    const donnees = JSON.parse(xhr.responseText);
    for (const key in donnees) {
      console.log(`propriété ${key} : valeur ${donnees[key]}`);
    }
    alert(donnees.origin);
  }
}

// enfin on n'oublie pas d'envoyer la requête !
xhr.send();