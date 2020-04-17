// Section objet

let chien = {
    race: 'Shiba',
    poil: 'court',
    aboyer: ()=> console.log('waf waf')
}

chien.aboyer();

// let magicien = {
//     attaquer: ()=> { console.log('le magcien lance un sort');}
// }

// let guerrier = {
//     attaquer: ()=> { console.log('le guerrier prend son épée');}
// }

// magicien.attaquer();
// guerrier.attaquer();



///// Objet Set ///// 

let nombres = [1, 2, 3, 4, 4, 4, 5, 6, 6];
let monSet = new Set(nombres); //attention à la majuscule !

monSet.add(7);
monSet.add(8);
monSet.delete(8);

console.log(monSet);

///// Objet Map ///// 

let user = new Map();

user.set('Younes El hamdani',
{
    email: 'test.T@gmail.com',
    poste: 'etudiant',
    age: '20 ans'
});

user.set('Thomas Toledo',
{
    email: 'unknown',
    poste: 'prof',
    age: 'unknown'
});

// user.delete('Thomas Toledo');

console.log(user);

///// Objet WeakSet ///// 

let voitures = new WeakSet();

let voiture1 = {
    Marque: 'tesla',
    Modele: 'S',
    Version: 'sport'
}
let voiture2 = {
    Marque: 'BMW',
    Modele: 'Serie3',
    Version: 'Competition'
}


voitures.add(voiture1);
voitures.add(voiture2);

console.log(voitures);