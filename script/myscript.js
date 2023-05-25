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


//const lezione = new Date("May 26, 2023 09:30:00");
//console.log(lezione);

let divTime = document.querySelector("div.time");
console.log(divTime);
let p = document.createElement("p");
p.classList.add("number");
p.append(00);
divTime.appendChild(p);


const dataNow = new Date();
console.log(dataNow);

let day = dataNow.getDay();
console.log(day);

let hour = dataNow.getHours();
console.log(hour);

let minutes = dataNow.getMinutes();
console.log(minutes);

let seconds = dataNow.getSeconds();
console.log(seconds);



/*
setInterval(Minuti,3000);

function DataNow(){
const data = new Date();
let hours, minutes, seconds, ms;
hours = data.getHours() + ":";
minutes = data.getMinutes() + ":";
seconds = data.getSeconds() + ":";
ms = data.getMilliseconds() + ":";
console.log("Sono le ore " + hours + minutes + seconds + ms);
}


function Minuti() {
    var data = new Date();
    var minuti = data.getMinutes();
    var mancanti = data.setMinutes(60 - minuti);
    minuti = data.getMinutes();
    console.log("Mancano " + minuti  + " minuti alla fine dell'ora!!!");
    return(minuti);
}

Minuti();
*/