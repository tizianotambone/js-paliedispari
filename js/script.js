


let parolainvertita = prompt("inserisci una parola");

function palindroma(words){
    // let parolaInvertita = words.split("").reverse().join("");

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

        
        
    

