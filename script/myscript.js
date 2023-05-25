/**
 * 
 * 
Consigli
Questo esercizio richiede un po' di ricerca 
ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?

Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?

Esistono dei metodi per trasformare una data in millisecondi?

 * Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
 * 
 * 
 */




setInterval(orologio, 1000);

function orologio(){

    const dataNow = new Date();

    let day = dataNow.getDate();

    let hour = dataNow.getHours();

    let minute = dataNow.getMinutes();

    let second = dataNow.getSeconds();


    //FACCIO VEDERE IN PAGINA I VALORI
    let dayTime = document.querySelector("p.day");
    dayTime.innerHTML = day;

    let hourTime = document.querySelector("p.hour");
    hourTime.innerHTML = hour;

    let minuteTime = document.querySelector("p.minute");
    minuteTime.innerHTML = minute;

    let secondTime = document.querySelector("p.second");
    secondTime.innerHTML = second;

}


let adesso = new Date();
console.log(adesso);

let dopo = new Date("May 26, 2023 09:30:00");
console.log(dopo);
let countDown = dopo - adesso;
console.log(countDown); //RESTITUISCE IN MILLESIMI DI SECONDO 

const minuti =  parseInt((countDown / (1000 * 60)));
console.log(minuti);

const ore = minuti * 60;
const giorni = ore * 24;
const anni = giorni * 365;

/*
function Minuti() {
    var data = lezione;
    var ore = data.getMinutes();
    var mancanti = data.setMinutes(60 - ore);
    ore = data.getMinutes();
    console.log("Mancano " + ore  + " ore");
    return(ore);
}

Minuti();
*/
