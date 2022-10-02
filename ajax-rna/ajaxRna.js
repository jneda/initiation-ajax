// références au DOM
const searchInputElement = document.getElementById("search-parameters");
const searchButtonElement = document.getElementById("search-button");
const resultsListElement = document.getElementById("results-list");

// manipulation du DOM
function makeListItem (associationData) {
  const listItemElement = document.createElement("li");

  const titleElement = document.createElement("h2");
  titleElement.innerText = associationData.titre;
  listItemElement.appendChild(titleElement);

  const addressElement = document.createElement("address");
  addressElement.innerText = `${associationData.cp} ${associationData.ville}`;
  listItemElement.appendChild(addressElement);

  const pElement = document.createElement("p");
  pElement.innerText = associationData.objet;
  listItemElement.appendChild(pElement);

  resultsListElement.appendChild(listItemElement);
}

function updateDOM(results) {
  // réinitialisation de la liste
  resultsListElement.innerHTML = "";

  for (const associationData of results) {
    makeListItem(associationData);
  }
}

// traitement des données

function extractAssociationsData (data) {
  const associationsData = [];
  for (const associationObject of data.association) {
    const associationData = {
      titre: associationObject.titre,
      objet: associationObject.objet,
      cp: associationObject.adresse_code_postal,
      ville: associationObject.adresse_libelle_commune
    };
    associationsData.push(associationData);
  }
  return associationsData;
}

// requête avec fetch()

async function fetchResults(searchParameters) {
  const baseURL = "https://entreprise.data.gouv.fr/api/rna/v1/full_text/";
  const response = await fetch(baseURL + searchParameters);
  if (response.ok) {
    const data = await response.json();
    return extractAssociationsData(data);
  }
}

// fonction de recherche
async function searchAndUpdate() {
  const searchParameters = encodeURIComponent(searchInputElement.value);
  const results = await fetchResults(searchParameters);
  updateDOM(results);
}

// gestion des événements
searchButtonElement.addEventListener("click", searchAndUpdate);
