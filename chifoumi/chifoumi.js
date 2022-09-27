// constantes utilitaires

const PIERRE = 0;
const FEUILLE = 1;
const CISEAUX = 2;

const NUL = 0;
const JOUEUR = 1;
const ORDINATEUR = 2;

// fonction de comparaison

function comparer(choix1, choix2) {
  if (choix1 === choix2) {
    return NUL;
  }
  else if ((choix1 === PIERRE && choix2 === CISEAUX) ||
    (choix1 === FEUILLE && choix2 === PIERRE) ||
    (choix1 === CISEAUX && choix2 === FEUILLE)) {
    return JOUEUR;
  }
  return ORDINATEUR;
}

// tests

function getChoixString(choix) {
  return choix === PIERRE
    ? "pierre"
    : choix === FEUILLE
      ? "feuille"
      : "ciseaux";
}

function getVainqueurString(resultat) {
  return resultat === NUL
    ? "égalité"
    : resultat === JOUEUR
      ? "joueur"
      : "ordinateur";
}

function log(choix1, choix2) {
  const vainqueur = comparer(choix1, choix2);
  console.log(`${getChoixString(choix1)} vs ${getChoixString(choix2)}` +
    ` => vainqueur : ${getVainqueurString(vainqueur)}`);
}

log(PIERRE, PIERRE);
log(PIERRE, CISEAUX);
log(PIERRE, FEUILLE);
log(FEUILLE, FEUILLE);
log(FEUILLE, PIERRE);
log(FEUILLE, CISEAUX);
log(CISEAUX, CISEAUX);
log(CISEAUX, FEUILLE);
log(CISEAUX, PIERRE);