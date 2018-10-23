var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");
var joueur = document.getElementById("joueur");
var IA = document.getElementById("IA");

var img1 = "img/rock.jpg";
var img2 = "img/paper.jpg";
var img3 = "img/sciss.jpg";

function randomImg(){
    var randoImages = Math.floor(Math.random()*3) +1;
    if (randoImages == 1){
        IA.src= "img/rock.jpg";
    }else if (randoImages == 2){
        IA.src= "img/paper.jpg";
    } else {
        IA.src= "img/sciss.jpg";
    } 
    return IA.src;
}

function resultat (){
    
}


pierre.addEventListener("click",function(){
    joueur.src = "img/rock.jpg";
    IA.src = randomImg ();


    
});

feuille.addEventListener("click",function(){
    joueur.src = "img/paper.jpg";
    IA.src = randomImg ();
});

ciseaux.addEventListener("click",function(){
    joueur.src = "img/sciss.jpg";
    IA.src = randomImg ();
});


