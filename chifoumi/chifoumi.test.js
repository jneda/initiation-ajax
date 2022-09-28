// tests

let testManuel = false;
let testAuto = false;

// fonction choisirCPU()
testAuto = false;

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

if (testAuto) {
  testChoisirCPU(1000);
  testChoisirCPU(10 * 1000);
  testChoisirCPU(100 * 1000);
  testChoisirCPU(1000 * 1000);
}

// test choisirJoueur()
// a la mano...
testManuel = false;

while (testManuel && prompt("Tester choisirJoueur() ?") !== "non") {
  console.log(choisirJoueur());
}

// fonction comparer()
testAuto = false;

function testComparer(choixJoueur, choixCPU, attendu) {
  const resultat = comparer(choixJoueur, choixCPU);
  console.log(
    `${choixJoueur} vs ${choixCPU}\n=> vainqueur : ${resultat}` +
    ` vs attendu : ${attendu}\n=> OK : ${resultat === attendu ? true : false}`
  );
}

if (testAuto) {
  testComparer(PIERRE, PIERRE, NUL);
  testComparer(PIERRE, PIERRE, PIERRE);
  testComparer(PIERRE, CISEAUX, PIERRE);
  testComparer(PIERRE, CISEAUX, CISEAUX);
  testComparer(PIERRE, FEUILLE, FEUILLE);
  testComparer(PIERRE, FEUILLE, PIERRE);
  testComparer(FEUILLE, FEUILLE, NUL);
  testComparer(FEUILLE, PIERRE, FEUILLE);
  testComparer(FEUILLE, CISEAUX, CISEAUX);
  testComparer(CISEAUX, CISEAUX, NUL);
  testComparer(CISEAUX, FEUILLE, CISEAUX);
  testComparer(CISEAUX, PIERRE, PIERRE);
}

// fonction getVainqueur()
testAuto = true;

function testGetVainqueur(choixJoueur, choixGagnant, attendu) {
  console.log(`choixJoueur: ${choixJoueur}, choixGagnant : ${choixGagnant}` +
    `\n attendu : ${attendu}, test OK : ` +
    `${getVainqueur(choixJoueur, choixGagnant) === attendu}`);
}

if (testAuto) {
  testGetVainqueur(PIERRE, NUL, NUL);
  testGetVainqueur(PIERRE, PIERRE, JOUEUR);
  testGetVainqueur(PIERRE, FEUILLE, ORDINATEUR);
  testGetVainqueur(FEUILLE, NUL, NUL);
  testGetVainqueur(CISEAUX, NUL, NUL);
  testGetVainqueur(FEUILLE, FEUILLE, JOUEUR);
  testGetVainqueur(FEUILLE, CISEAUX, ORDINATEUR);
  testGetVainqueur(CISEAUX, CISEAUX, JOUEUR);
  testGetVainqueur(CISEAUX, PIERRE, ORDINATEUR);
}

// fonction jouerManche()
// a la mano (via console.log dans la fonction testée)
testManuel = false;

while (testManuel && prompt("Tester jouerManche() ?") !== "non") {
  jouerManche();
}
