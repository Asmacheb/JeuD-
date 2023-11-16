//Créer un simulateur de lancés de dé

// Lorsque vous lancer votre page de navigateur, je veux voir apparaitre le résultat la face d'un dé à 6 face (faire apparaitre une image).

// Quelques conseils pour réussir l'exercice :

// Essayez de décomposer au maximum le projet et allez y étape par étape.
// Faites votre structure HTML avec votre image
// Changer la source de votre image à l'aide de JS
// Récupérer dans la console un nombre aléatoire entre 1 et 6
// Adapter votre changement de source d'image par rapport au résultat du random (if)
let faceDe = Math.floor(Math.random() * 6) + 1;
console.log("Résultat du lancer de dé :", faceDe);

const body = document.body;

let img = new Image();

if (faceDe === 1) {
  img.src = "img/de1.png";
} else if (faceDe === 2) {
  img.src = "img/de2.png";
} else if (faceDe === 3) {
  img.src = "img/de3.png";
} else if (faceDe === 4) {
  img.src = "img/de4.png";
} else if (faceDe === 5) {
  img.src = "img/de5.png";
} else if (faceDe === 6) {
  img.src = "img/de6.png";
}
body.appendChild(img);
