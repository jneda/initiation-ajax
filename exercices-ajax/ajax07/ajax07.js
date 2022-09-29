/* Exemple de surveillance de la progression de la requête avec XMLHttpRequest
source :
https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#surveiller_la_progression
 */

// on attache un EventListener au bouton pour lancer la requête

const buttonElement = document.getElementById("ajax-button");
buttonElement.addEventListener("click", makeRequest);

// on déclare la variable se référant à l'instance de XMLHttpRequest
// dont on va se servir

let httpRequest;

// définition des fonctions de callback qui déclenchées par les événements
// de progression fournis par XMLHttpRequest

function updateProgress (progressEvent) {
  // si l'on connait la taille totale du contenu de la réponse
  // calculer le pourcentage déjà transféré
  if (progressEvent.lengthComputable) {
    const percentComplete = progressEvent.loaded / progressEvent.total;
    console.log(`Pourcentage transféré : ${(percentComplete * 100).toFixed(2)} %`);
  }
}

function transferComplete (progressEvent) {
  alert("Le transfert est terminé !");
  console.log(httpRequest.responseText);
}

function transferFailed (progressEvent) {
  alert("Une erreur est survenue pendant le transfert de la réponse.");
}

function transferCanceled (progressEvent) {
  alert("Le transfert a été annulé par le client.");
}

// rattachement de fonctions de callback aux événements de progression

function setHttpRequestProgressListeners() {
  httpRequest.addEventListener("progress", updateProgress);
  httpRequest.addEventListener("load", transferComplete);
  httpRequest.addEventListener("error", transferFailed);
  httpRequest.addEventListener("abort", transferCanceled);
}

// fonction de requête AJAX

function makeRequest() {
  // on crée une nouvelle instance de XMLHttpRequest
  httpRequest = new XMLHttpRequest();

  // bonne pratique : on vérifie qu'il n'y a pas de problème
  if (!httpRequest) {
    alert("Impossible de créer une instance de XMLHTTP");
    return;
  }

  // IMPORTANT : on attache les fonctions de callback aux événements de
  // progression AVANT d'invoquer open()
  setHttpRequestProgressListeners();

  // on définit méthode et url de la requête

  /* Urls à tester */

  // const url = "https://cat-fact.herokuapp.com/facts";
  // const url = "https://techy-api.vercel.app/api/json";
  // const url = "https://techy-api.vercel.app/api/json";
  const url = "https://entreprise.data.gouv.fr/api/rna/v1/full_text/logiciels libres";

  httpRequest.open("GET", url);

  // enfin on envoie la requête
  httpRequest.send();
}
