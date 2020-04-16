function IMC(poid, taille) {
   
    let tailleEnMetre   = taille / 100; // calcul de la taille en mètres
    let taillecalculee  = Math.pow(tailleEnMetre, 2); // calcul de la taille au carré
    let calculIMc       = poid / taillecalculee; 
    
    alert("votre imc est de "+calculIMc);
}

let poid = prompt("Quel est votre poid ? (en kg)");
let taille = prompt("Quel est votre taille ? (en cm)");

IMC(poid, taille);