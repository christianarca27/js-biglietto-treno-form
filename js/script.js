const prezzoPerKm = 0.21;

// Leggo e salvo il riferimento al bottone di generazione
let buttonGenerateEl = document.getElementById("btn-genera");
console.log(buttonGenerateEl);

// Evento nel caso venga cliccato il bottone di generazione del biglietto
buttonGenerateEl.addEventListener("click", function() {
    //Leggo e salvo il valore dell'input "Nome Cognome"
    let passengerNameEl = document.getElementById("passenger-name");
    let passengerName = passengerNameEl.value;
    console.log(passengerName);

    //Leggo e salvo il valore dell'input "Km da percorrere"
    let kmToGoEl = document.getElementById("km-to-go");
    let kmToGo = kmToGoEl.value;
    console.log(kmToGo);
    
    //Leggo e salvo il valore dell'input "Fascia d'età"
    let ageRangeEl = document.getElementById("age-range");
    let ageRange = ageRangeEl.value;
    console.log(ageRange);

    // Calcolo il prezzo del biglietto a meno di scontistiche
    let ticketPrice = kmToGo * prezzoPerKm;

    // Calcolo la scontistica se mi trovo in una delle fasce d'età che la prevede
    if(ageRange == "minorenne") {
        ticketPrice *= 0.8;
    }
    else if(ageRange == "over-65") {
        ticketPrice *= 0.6;
    }

    // TEST: Stampo in pagina il risultato finale
    document.getElementById("ticket").innerText = "Il prezzo del biglietto di " + passengerName + " è di " + ticketPrice + "€";
})