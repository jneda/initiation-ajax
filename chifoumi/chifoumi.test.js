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
