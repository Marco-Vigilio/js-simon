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



const adesso = new Date();
console.log(adesso);

const dopo = new Date("May 26, 2023 09:30:00");
console.log(dopo);
const countDown = dopo - adesso;
console.log(countDown); //RESTITUISCE IN MILLESIMI DI SECONDO 

//CALCOLO DEI GIORNI - ORE - MINUTI - SECONDI
let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
console.log(days);

let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);

let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
console.log(minutes);

let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
console.log(seconds);

/*
//FACCIO VEDERE IN PAGINA I VALORI
let dayTime = document.querySelector("p.days");
dayTime.innerHTML = days;

let hourTime = document.querySelector("p.hours");
hourTime.innerHTML = hours;

let minuteTime = document.querySelector("p.minutes");
minuteTime.innerHTML = minutes;

let secondTime = document.querySelector("p.seconds");
secondTime.innerHTML = seconds;

*/