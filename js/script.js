


let parolainvertita = prompt("inserisci una parola");

function palindroma(words){
   

    // inizializzo una variabile
    let parolaInvertita = "";

    // ciclo partendo dall'ultima posizione della parola che viene dall'argomento della funzione (words)
    for (let i = words.length -1;  i >= 0; i--) {

        parolaInvertita += words[i]
        console.log('nel ciclo', parolaInvertita)
    }

    // console.log('fuori dal ciclo', parolaInvertita)
    return words === parolaInvertita;
}

// se la funzione mi retituisce true o false appare lo script parola palindroma altrimenti appare parola non palindroma
if(palindroma(parolainvertita)){
    console.log("parola palindroma")
}
else{
    console.log("parola non palindroma")
}

// ESERCIZIO NUMERO 2

let number= prompt("inserisci un numero")
let select= prompt("scegli pari o dispari")
let pc = random(1, 5)

let somma=(number+ pc)

let risultato= pariDispari(somma)
console.log(risultato)

if(select==risultato){
    console.log("hai vinto")
}
else{
    console.log("hai perso")
}




// funzioni 
function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
       
function pariDispari(numero){
    if(numero%2==0){
       return "pari"
    }
    else{
         return "dispari"
    }
    
    
    
}





        
    

