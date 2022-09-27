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

// tests

function testComparer(choix1, choix2, attendu) {
  const resultat = comparer(choix1, choix2);
  console.log(
    `${choix1} vs ${choix2}\n=> vainqueur : ${resultat}` +
    ` vs attendu : ${attendu}\n=> OK : ${resultat === attendu ? true : false}`
  );
}

testComparer(PIERRE, PIERRE, NUL);
testComparer(PIERRE, PIERRE, JOUEUR);
testComparer(PIERRE, CISEAUX, JOUEUR);
testComparer(PIERRE, CISEAUX, ORDINATEUR);
testComparer(PIERRE, FEUILLE, ORDINATEUR);
testComparer(PIERRE, FEUILLE, JOUEUR);
testComparer(FEUILLE, FEUILLE, NUL);
testComparer(FEUILLE, PIERRE, JOUEUR);
testComparer(FEUILLE, CISEAUX, ORDINATEUR);
testComparer(CISEAUX, CISEAUX, NUL);
testComparer(CISEAUX, FEUILLE, JOUEUR);
testComparer(CISEAUX, PIERRE, ORDINATEUR);
