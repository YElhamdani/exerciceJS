    
    //Choix du type de calcul
    do {
        var choix = Number(prompt("Que souhaitez-vous faire ? ( choisi un numéro 1, 2, 3 ou 4 ^^) \n\n1 - Addition \n\n2 - Multiplication \n\n3 - Soustraction \n\n4 - Division"));
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

    
    //Choix des nombres
    do {
        var premierNombre = Number(prompt("Entre ton premier nombre"));
        var deuxiemeNombre = Number(prompt("Entre ton deuxieme nombre"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

   
    
    //fonctions calcul
    function addition(nombreA, nombreB){
        let result = nombreA + nombreB;
        return(result);
    };

    function multiplication(nombreA, nombreB){
        let result = nombreA * nombreB;
        return(result);
    };

    function soustraction(nombreA, nombreB){
        let result = nombreA - nombreB;
        return(result);
    };

    function division(nombreA, nombreB){
        if (nombreB != 0) {
            let result = nombreA / nombreB;
        } else{
            alert("Interdit de diviser par 0 mon ami");
        }
        
        return(result);
    };

    
    //connexion du choix de calcul et de la fonction voulue
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;

        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;

        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
    
        default: throw new error ("Une erreur est survenue");
            break;
    }
    
    //affichage du resultat
    alert(resultat);
