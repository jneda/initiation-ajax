/* Exemple simple avec XMLHttpRequest */

// on crée une nouvelle instance de la classe XMLHttpRequest
// et on l'affecte à la variable xhr
const xhr = new XMLHttpRequest();

// on utilise la méthode open pour créer une nouvelle requête HTTP
// il faut préciser la méthode et l'URL
const methode = "GET";
const _URL = "https://jsonplaceholder.typicode.com/users/1";

xhr.open(methode, _URL);

// on définit une fonction pour gérer la réponse du serveur
// et on l'attache au gestionnaire d'événement de notre objet xhr
xhr.onreadystatechange = function () {
  // on lit la propriété readyState de l'objet pour connaître le statut
  // de la requête
  
  // ici on regarde si la requête est terminée
  // cf. https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const reponse = xhr.responseText;
    alert(`La réponse reçue est de type ${typeof reponse}\n` +
      `Son contenu est ${xhr.responseText}`); // on affiche le texte renvoyé par le serveur
  }
}

// enfin on n'oublie pas d'envoyer la requête !
xhr.send();