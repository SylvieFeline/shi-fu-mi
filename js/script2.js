function shifumi() {
    //Déclaration des variables
    var iaChoice;
    var playerChoice;
    var winnerIs;
    
    //Déclaration des éléments du DOM
    var pierre = document.getElementById("pierre");
    var feuille = document.getElementById("feuille");
    var ciseaux = document.getElementById("ciseaux");
    var choixJoueur = document.getElementById("joueur");
    var choixIA = document.getElementById("IA");
    var resultat = document.getElementById("resultat");
    var initPartie = document.getElementById("partie");
    
    //TODO: Fonction Jeu
      //TODO: Choix de l'IA -> iaChoice
      iaChoice = Math.floor(Math.random()*3);
      if (rando == 1){
            IA.src = "img/rock.jpg";
        }else if (rando == 2){
            IA.src = "img/paper.jpg";
        } else {
            IA.src = "img/sciss.jpg";
        };
      //TODO: récupérer le choix du joueur -> playerChoice
    feuille.addEventListener("click",function(){
        choixJoueur.src = "img/paper.jpg";
        playerChoice = 2;
    });
    ciseaux.addEventListener("click",function(){
        choixJoueur.src = "img/sciss.jpg";  
        playerChoice = 0;
    });
    pierre.addEventListener("click",function(){
        choixJoueur.src = "img/rock.jpg";
        playerChoice = 1;
    });
 
      //TODO: Comparer les choix (playerChoice, iaChoice)-> winnerIs
         //TODO: Si : Cas égalité
         
         //TODO: Sinon Si : Cas de victoire 
         //TODO: Sinon : Cas de défaite
      //TODO: Afficher les résultats
      //TODO: Afficher le choix du joueur (playerChoice)
        //TODO: Afficher le choix de l'IA (iaChoice)
        //TODO: Afficher le résultat
    //TODO: Fonction restart


}
    
    shifumi();
    
    
    
    
    