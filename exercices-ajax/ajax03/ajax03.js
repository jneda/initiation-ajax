/* Exemple onreadystatechange avec XMLHttpRequest
NB: le temps que prend la requête est variable (illustrer via outils de dév) */

// on stocke la date de départ
const startTime = Date.now();
// console.log(startTime); // DEBUG

// nouvelle instance XMLHttpRequest
const xhr = new XMLHttpRequest();

// paramaétrage de la requête
const methode = "GET";
const _URL = "https://jsonplaceholder.typicode.com/users/1";

// appel de la méthode open()
xhr.open(methode, _URL);

// definition de la fonction de callback pour
// le gestionnaire d'événement onreadystatechange
xhr.onreadystatechange = function () {
  // on lit la propriété readyState de l'objet pour connaître le statut
  // de la requête
  // cf. https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState

  let message;

  message = `État n° ${xhr.readyState} - `;
  switch (xhr.readyState) {
    case XMLHttpRequest.UNSENT:
      message += `Temps écoulé : ${Date.now() - startTime} ms - ` +
        "Le client a été créé. open() n'a pas encore été appelé.";
      break;

    case XMLHttpRequest.OPENED:
      message += `Temps écoulé : ${Date.now() - startTime} ms - ` +
        "open()a été appelé.";
      break;

    case XMLHttpRequest.HEADERS_RECEIVED:
      message += `Temps écoulé : ${Date.now() - startTime} ms - ` +
        "send() a été appelé, et les en-têtes et le statut sont disponibles.";
      break;
    
    case XMLHttpRequest.LOADING:
      message += `Temps écoulé : ${Date.now() - startTime} ms - ` +
        "Téléchargement; responseText contient des données partielles. ";
      break;

    case XMLHttpRequest.DONE:
      message += `Temps écoulé : ${Date.now() - startTime} ms - ` +
        "L'opération est terminée.";
  }

  console.log(message);
}

// enfin on n'oublie pas d'envoyer la requête !
xhr.send();