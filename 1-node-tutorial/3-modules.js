// Modules
// en: CommonJS, every file is module (by default)
// en: Modules encapsulated code (only share minimum)

// fr : CommonJS, chaque fichier est un module (par défaut)
// fr : Code encapsulé des modules (partage uniquement le minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')
// console.log(names);

sayHi("Cherif Diouf");
sayHi(names.maleeq);
sayHi(names.abdoul);
