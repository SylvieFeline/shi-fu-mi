var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");
var joueur = document.getElementById("joueur");
var IA = document.getElementById("IA");
var resultat = document.getElementById("resultat");
var partie = document.getElementById("partie");

var img1 = "img/rock.jpg";
var img2 = "img/paper.jpg";
var img3 = "img/sciss.jpg";

function randomImg(){
    var rando = Math.floor(Math.random()*3);
    if (rando == 1){
        IA.src = "img/rock.jpg";
    }else if (rando == 2){
        IA.src = "img/paper.jpg";
    } else {
        IA.src = "img/sciss.jpg";
    };
    return IA.src;
}



pierre.addEventListener("click",function(){
    joueur.src = "img/rock.jpg";
    // IA.src = randomImg ();
    var rando = Math.floor(Math.random()*3);
    if (rando == 1){
        IA.src = "img/rock.jpg";
        resultat.innerHTML = "Match nul";
        resultat.style.backgroundColor = "orange";
    }else if (rando == 2){
        IA.src = "img/paper.jpg";
        resultat.innerHTML = "Vous avez perdu";
        resultat.style.backgroundColor = "red";
    } else {
        IA.src = "img/sciss.jpg";
        resultat.innerHTML = "Vous avez gagné";
        resultat.style.backgroundColor = "green";
    };
});

feuille.addEventListener("click",function(){
    joueur.src = "img/paper.jpg";
    // IA.src = randomImg ();
    var rando = Math.floor(Math.random()*3);
    if (rando == 1){
        IA.src = "img/paper.jpg";
        resultat.innerHTML = "Match nul";
        resultat.style.backgroundColor = "orange";
    }else if (rando == 2){
        IA.src = "img/sciss.jpg";
        resultat.innerHTML = "Vous avez perdu";
        resultat.style.backgroundColor = "red";
    } else {
        IA.src = "img/rock.jpg";
        resultat.innerHTML = "Vous avez gagné";
        resultat.style.backgroundColor = "green";
    };
});

ciseaux.addEventListener("click",function(){
    joueur.src = "img/sciss.jpg";
    // IA.src = randomImg ();
    var rando = Math.floor(Math.random()*3);
    if (rando == 1){
        IA.src = "img/sciss.jpg";
        resultat.innerHTML = "Match nul";
        resultat.style.backgroundColor = "orange";
    }else if (rando == 2){
        IA.src = "img/rock.jpg";
        resultat.innerHTML = "Vous avez perdu";
        resultat.style.backgroundColor = "red";
    } else {
        IA.src = "img/paper.jpg";
        resultat.innerHTML = "Vous avez gagné";
        resultat.style.backgroundColor = "green";
    };
});


partie.addEventListener("click", function(){
    joueur.src = "images/Portrait-icon.png";
    IA.src ="images/IA.jpg";

});






// feuille.addEventListener("click",function(){
//     joueur.src = "img/paper.jpg";
//     IA.src = randomImg ();
//     if (IA.src = "img/sciss.jpg"){
//         resultat.innerHTML = "Vous avez perdu";
//         resultat.style.backgroundColor = "red";
//     } else if (IA.src = "img/rock.jpg"){
//         resultat.innerHTML = "Vous avez gagné";
//         resultat.style.backgroundColor = "green";
//     }else {
//         resultat.innerHTML = "Match nul";
//         resultat.style.backgroundColor = "orange";
//     };
// });

// ciseaux.addEventListener("click",function(){
//     joueur.src = "img/sciss.jpg";
//     IA.src = randomImg ();
//     if (IA.src = "img/rock.jpg"){
//         resultat.innerHTML = "Vous avez perdu";
//         resultat.style.backgroundColor = "red";
//     } else if (IA.src = "img/paper.jpg"){
//         resultat.innerHTML = "Vous avez gagné";
//         resultat.style.backgroundColor = "green";
//     }else {
//         resultat.innerHTML = "Match nul";
//         resultat.style.backgroundColor = "orange";
//     }
// });

// function result (){
//     if(joueur.src = img1){
//         if (IA.src = img2){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img3){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     } else if (joueur.src = img2){
//         if (IA.src = img3){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img1){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     } else {
//         if (IA.src = img1){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img2){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     }
// }
