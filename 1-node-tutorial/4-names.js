// Modules
// en: CommonJS, every file is module (by default)
// en: Modules encapsulated code (only share minimum)

// fr : CommonJS, chaque fichier est un module (par défaut)
// fr : Code encapsulé des modules (partage uniquement le minimum)


// local          = locale
const secret = "Super SECRET";

// share          = partager
const abdoul = "Abdoul";
const maleeq = "Maleeq";


module.exports = { abdoul, maleeq };

console.log(module);

