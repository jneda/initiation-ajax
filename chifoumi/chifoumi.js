// constantes utilitaires

const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const NUL = "aucun";
const JOUEUR = "joueur";
const ORDINATEUR = "ordinateur";

// fonction de choix CPU

function choisirCPU() {

  const choix = [PIERRE, FEUILLE, CISEAUX];
  // on choisit au hasard un index entre 0 et 2
  const index = Math.floor(Math.random() * 3);

  return choix[index];
}

// fonction de choix joueur

function choisirJoueur() {
  // on définit les choix possibles
  const possibilites = [
    "p",
    "pierre",
    "f",
    "feuille",
    "c",
    "ciseaux"
  ];

  // on boucle tant que l'utilisateur entre n'importe quoi
  let choix;
  do {
    choix = prompt("Quel est ton choix ? ((p)ierre, (f)euille ou (c)iseaux)").toLowerCase();
  } while (!possibilites.includes(choix));

  // on s'assure de renvoyer une valeur utilisable
  if (choix === "p") {
    choix = PIERRE;
  } else if (choix === "f") {
    choix = FEUILLE;
  } else if (choix === "c") {
    choix = CISEAUX;
  }

  return choix;
}

// fonction de comparaison

function comparer(choixJoueur, choixCPU) {
  if (choixJoueur === choixCPU) {
    return NUL;
  } else if (
    (choixJoueur === PIERRE && choixCPU === CISEAUX) ||
    (choixJoueur === FEUILLE && choixCPU === PIERRE) ||
    (choixJoueur === CISEAUX && choixCPU === FEUILLE)
  ) {
    return JOUEUR;
  }
  return ORDINATEUR;
}

// fonction pour une manche

function jouerManche() {
  const choixCPU = choisirCPU();
  const choixJoueur = choisirJoueur();
  const vainqueur = comparer(choixJoueur, choixCPU);
  console.log(`${choixJoueur} vs ${choixCPU} : ${vainqueur} gagnant`);
  return vainqueur;
}

// fonction pour la partie

function jouerPartie() {
  let scoreJoueur = 0, scoreCPU = 0;

  for (let manche = 0; manche < 3; manche++) {
    const vainqueur = jouerManche();
    if (vainqueur === JOUEUR) {
      scoreJoueur++;
    } else if (vainqueur === ORDINATEUR) {
      scoreCPU++;
    }
  }

  let result = "Match nul ! 😶";
  if (scoreJoueur > scoreCPU) {
    result = "Tu as gagné ! 🥳";
  } else if (scoreJoueur < scoreCPU) {
    result = "Tu as perdu... 😭";
  }

  alert(result);
}

jouerPartie();
