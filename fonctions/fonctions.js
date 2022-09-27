/* Développer :

une fonction diviserParDeux qui retourne la moitié de la valeur passée en
paramètre. Tests :
• diviserParDeux(2) === 1;
• diviserParDeux(4) === 2;
• var n = Math.random(); diviserParDeux(n) === n / 2 */

function diviserParDeux(n) {
  return n / 2;
}

// tests

diviserParDeux(2) === 1;
diviserParDeux(4) === 2;
var n = Math.random();
diviserParDeux(n) === n / 2;

/* une fonction somme qui retourne la somme des deux paramètres qui lui seront
passés. Tests :
• somme(1, 1) === 2;
• somme(1, 2) === 3;
• somme(2, 1) === 3;
• var n = Math.random(); somme(n, 1) === n + 1; */

function somme(a, b) {
  return a + b;
}

// tests

somme(1, 1) === 2;
somme(1, 2) === 3;
somme(2, 1) === 3;
var n = Math.random();
somme(n, 1) === n + 1;

/* une fonction signe qui retourne la chaine de caractères positif, négatif ou nul,
selon le signe de la valeur passée
en paramètre. Tests :
• signe(-1) === 'négatif';
• signe(0) === 'nul';
• signe(Math.random()) === 'positif'; */

function signe(n) {
  if (n > 0) {
    return "positif";
  } else if (n < 0) {
    return "négatif";
  } else {
    return "nul";
  }
}

// tests
signe(-1) === 'négatif';
signe(0) === 'nul';
signe(Math.random()) === 'positif';

// bonus

function l33tsp34k(n) {
  return n > 0 ? "positif" : n < 0 ? "négatif" : "nul";
}

// tests
l33tsp34k(-1) === 'négatif';
l33tsp34k(0) === 'nul';
l33tsp34k(Math.random()) === 'positif';

/* une fonction factorielle qui retourne le produit de tous les entiers consécutifs
entre 1 et l'entier passé en
paramètre (compris). Exemple : factorielle(3) retourne le résultat de 1 * 2 * 3,
soit 6. Tests :
• factorielle(0) === 1;
• factorielle(1) === 1;
• factorielle(3) === 6;
• factorielle(4) === 24; */

function factorielle(n) {
  // cas n === 0
  if (n === 0) {
    return 1;
  }
  
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

factorielle(0) === 1;
factorielle(1) === 1;
factorielle(3) === 6;
factorielle(4) === 24;
