/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */
const PRICE_KM = 0.21
// -Chiedo all'utente che età ha
const ageUser = Number(prompt("inserisci la tua età"))
console.log(ageUser)
// -Chiedo all'utente quanti km vuole fare
const kmChoose = Number(prompt("inserisci i kilometri che desideri fare"))
console.log(kmChoose)
//somma principale del totale non scontato
let priceTot = kmChoose + PRICE_KM

// -SE L'utente ha un'eta >18 anni avrà lo sconto del 20%
if(ageUser < 18){
    const disc= priceTot * 0.2
    priceTot= priceTot - disc
} else if(ageUser <=65 ){
    const disc= priceTot * 0.40
    priceTot= priceTot - disc 
}
alert()
   


console.log(priceTot)
// -ALTRIMENTI se l'utente ha un'età < di 65 anni avrà lo sconto del 40%

