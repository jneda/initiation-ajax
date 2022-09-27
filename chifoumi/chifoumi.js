// constantes utilitaires

const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const NUL = "aucun";
const JOUEUR = "joueur";
const ORDINATEUR = "ordinateur";

// fonction de comparaison

function comparer(choix1, choix2) {
  if (choix1 === choix2) {
    return NUL;
  } else if (
    (choix1 === PIERRE && choix2 === CISEAUX) ||
    (choix1 === FEUILLE && choix2 === PIERRE) ||
    (choix1 === CISEAUX && choix2 === FEUILLE)
  ) {
    return JOUEUR;
  }
  return ORDINATEUR;
}
