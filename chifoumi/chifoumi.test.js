// tests

// fonction choisirCPU()

function testChoisirCPU(n) {
  // on fait n choix et si tout se passe bien
  // on devrait avoir à peu près le même nombre pour chaque option

  const compteurs = [0, 0, 0]; // 0 = PIERRE, 1 = FEUILLE, 2 = CISEAUX

  for (let i = 0; i < n; i++) {
    const choix = choisirCPU();
    if (choix === PIERRE) {
      compteurs[0]++;
    } else if (choix === FEUILLE) {
      compteurs[1]++;
    } else {
      compteurs[2]++;
    }
  }

  console.log(`Nombre de tirages : ${n}\n` +
    `pierres : ${compteurs[0]}\n` +
    `feuilles : ${compteurs[1]}\n` +
    `ciseaux : ${compteurs[2]}`);
}

testChoisirCPU(1000);
testChoisirCPU(10 * 1000);
testChoisirCPU(100 * 1000);
testChoisirCPU(1000 * 1000);

// test choisirJoueur()
// a la mano...

while (prompt("Tester ?") !== "non") {
  console.log(choisirJoueur());
}

// fonction comparer()

function testComparer(choixJoueur, choixCPU, attendu) {
  const resultat = comparer(choixJoueur, choixCPU);
  console.log(
    `${choixJoueur} vs ${choixCPU}\n=> vainqueur : ${resultat}` +
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
