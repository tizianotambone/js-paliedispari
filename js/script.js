
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let parolainvertita = prompt("inserisci una parola");

function palindroma(words){
    let parolaInvertita = words.split("").reverse().join("");

    return words === parolaInvertita;
}




        
        
    

