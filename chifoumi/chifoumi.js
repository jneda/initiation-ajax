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
  const possibilites = ["p", "pierre", "f", "feuille", "c", "ciseaux"];

  // on boucle tant que l'utilisateur entre n'importe quoi
  let choix;
  do {
    choix = prompt(
      "Quel est ton choix ? ((p)ierre, (f)euille ou (c)iseaux)"
    ).toLowerCase();
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
  }

  switch (choixJoueur) {
    case PIERRE:
      if (choixCPU === FEUILLE) {
        return FEUILLE;
      } else {
        return PIERRE;
      }
    case FEUILLE:
      if (choixCPU === CISEAUX) {
        return CISEAUX;
      } else {
        return FEUILLE;
      }
    case CISEAUX:
      if (choixCPU === PIERRE) {
        return PIERRE;
      } else {
        return CISEAUX;
      }
  }
}

// fonctions pour une manche

// fonction de détermination du vainqueur

function getVainqueur(choixJoueur, choixGagnant) {
  let vainqueur;
  
  if (choixGagnant === NUL) {
    vainqueur = NUL;
  } else if (choixJoueur === choixGagnant) {
    vainqueur = JOUEUR;
  } else {
    vainqueur = ORDINATEUR;
  }

  return vainqueur;
}

// logique d'une manche

function jouerManche() {
  const choixCPU = choisirCPU();
  const choixJoueur = choisirJoueur();
  const choixGagnant = comparer(choixJoueur, choixCPU);
  // console.log(`${choixJoueur} vs ${choixCPU} : ${choixGagnant} gagnant`);

  return [choixJoueur, choixCPU, choixGagnant];
}

// fonctions pour la partie

// procédures d'affichage du résultat

function afficherResultatManche(
  choixJoueur, choixCPU, choixGagnant, scoreJoueur, scoreCPU
) {
  console.log(`choixJoueur : ${choixJoueur}, choixCPU : ${choixCPU},` +
    ` choixGagnant : ${choixGagnant}, scoreJoueur : ${scoreJoueur},` +
    ` scoreCPU : ${scoreCPU}`);
  const message =
    `Tu as choisi ${choixJoueur} et l'ordinateur ${choixCPU}, ` +
    (choixGagnant !== NUL ? `${choixGagnant} l'emporte !` : `manche nulle.`) +
    ` (Ton score : ${scoreJoueur} Ordinateur : ${scoreCPU})`;
  alert(message);
}

function afficherResultatPartie(scoreJoueur, scoreCPU) {
  let result = "Match nul ! 😶";

  if (scoreJoueur > scoreCPU) {
    result = "Tu as gagné ! 🥳";
  } else if (scoreJoueur < scoreCPU) {
    result = "Tu as perdu... 😭";
  }

  result += ` (Ton score : ${scoreJoueur} Ordinateur : ${scoreCPU})`;

  alert(result);
}

// logique pour une partie

function jouerPartie() {
  let scoreJoueur = 0,
    scoreCPU = 0;

  for (let manche = 0; manche < 3; manche++) {
    const [choixJoueur, choixCPU, choixGagnant] = jouerManche();
    const vainqueur = getVainqueur(choixJoueur, choixGagnant);

    if (vainqueur === JOUEUR) {
      scoreJoueur++;
    } else if (vainqueur === ORDINATEUR) {
      scoreCPU++;
    }

    console.log(`vainqueur : ${vainqueur}, scoreJoueur : ${scoreJoueur}, ` +
      `scoreCPU : ${scoreCPU}`);

    afficherResultatManche(
      choixJoueur, choixCPU, choixGagnant, scoreJoueur, scoreCPU
    );
  }

  afficherResultatPartie(scoreJoueur, scoreCPU);
}

// appel de la fonction principale

jouerPartie();
