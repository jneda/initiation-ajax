/* Exemple API avec XMLHttpRequest
source : https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Getting_Started
 */

// on attache un EventListener au bouton pour lancer la requête

const buttonElement = document.getElementById("ajax-button");
buttonElement.addEventListener("click", makeRequest);

// on déclare la variable se référant à l'instance de XMLHttpRequest
// dont on va se servir

let httpRequest;

// fonction de requête AJAX

function makeRequest() {
  // on crée une nouvelle instance de XMLHttpRequest
  httpRequest = new XMLHttpRequest();

  // bonne pratique : on vérifie qu'il n'y a pas de problème
  if (!httpRequest) {
    alert("Impossible de créer une instance de XMLHTTP");
    return;
  }

  // on attache une fonction de callback à l'EventListener onreadystatechange
  // exposé par httpRequest
  httpRequest.onreadystatechange = alertContents;

  // on définit méthode et url de la requête
  httpRequest.open("GET", "https://cat-fact.herokuapp.com/facts");

  // enfin on envoie la requête
  httpRequest.send();
}

// fonction de callback appelée quand le statut de la requête a changé

function alertContents() {
  // on s'assure que la requête est terminée grâce à la propriété
  // readystate de l'objet httpRequest et à la constante DONE de la classe
  // XMLHttpRequest
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // on s'assure que la requête a pu s'effectuer correctement
    // grâce au code d'état HTTP
    if (httpRequest.status === 200) {
      // on affiche le contenu sérialisé de la réponse
      alert(httpRequest.responseText);
    } else {
      // gestion des autres états HTTP
      alert("La requête n'a pu aboutir.")
    }
  }
}