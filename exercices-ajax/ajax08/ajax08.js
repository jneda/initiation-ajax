/* Exemple avec fetch :
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
 */

/* Urls à tester */

// const url = "https://cat-fact.herokuapp.com/facts";
// const url = "https://techy-api.vercel.app/api/json";
// const url = "https://techy-api.vercel.app/api/json";
// const url = "https://entreprise.data.gouv.fr/api/rna/v1/full_text/";

// références au DOM
const buttonElement = document.getElementById("ajax-button");
// const imgElement = document.querySelector("img");
const objectElement = document.querySelector("object");

// url de la requête
// const url = "toto.png";
const url = "Les_songes_drolatiques_de_Pantagruel.pdf";

// fonction callback

async function fetchImage() {
  fetch(url)
  .then((response) => response.blob())
  .then((myBlob) => {
    const objectUrl = URL.createObjectURL(myBlob);
    objectElement.data = objectUrl;
  });
}

buttonElement.addEventListener("click", fetchImage);
