/* Exemple API avec fetch
 */

function initDOM() {
  resultsListElement.innerHTML = "";
  resultsListElement.style.display = "none";
  resetButtonElement.style.display = "none";
}

function updateDOM(message) {
  // on crée un élement <p> contenant le message
  const pElement = document.createElement("p");
  pElement.innerText = message;

  // imbriqué dans un élément <li>
  const liElement = document.createElement("li");
  liElement.appendChild(pElement);

  // et on insère le tout dans l'élément <ul>
  resultsListElement.appendChild(liElement);

  // on cache la liste si elle est vide, sinon on l'affiche
  if (resultsListElement.childElementCount === 0) {
    resultsListElement.style.display = "none";
    resetButtonElement.style.display = "none";
  } else {
    resultsListElement.style.display = "block";
    resetButtonElement.style.display = "block";
  }
}

async function fetchAPIData() {
  // return "Have you tried turning it off and on again?";
  const response = await fetch("https://techy-api.vercel.app/api/json");
  if (response.ok) {
    const data = await response.json();
    return data.message;
  } 
}

async function getMessage() {
  const message = await fetchAPIData();
  updateDOM(message);
}

const resultsListElement = document.getElementById("results");

const ajaxButtonElement = document.getElementById("ajax-button");
ajaxButtonElement.addEventListener("click", getMessage);

const resetButtonElement = document.getElementById("reset-button");
resetButtonElement.addEventListener("click", initDOM);

initDOM();
