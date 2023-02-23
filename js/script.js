const prezzoPerKm = 0.21;

// Leggo e salvo il riferimento al bottone di generazione
let buttonGenerateEl = document.getElementById("btn-generate");

// Evento nel caso venga cliccato il bottone di generazione del biglietto
buttonGenerateEl.addEventListener("click", function() {
    //Leggo e salvo il valore dell'input "Nome Cognome"
    let passengerNameEl = document.getElementById("passenger-name");
    let passengerName = passengerNameEl.value;

    //Leggo e salvo il valore dell'input "Km da percorrere"
    let kmToGoEl = document.getElementById("km-to-go");
    let kmToGo = kmToGoEl.value;
    
    //Leggo e salvo il valore dell'input "Fascia d'età"
    let ageRangeEl = document.getElementById("age-range");
    let ageRange = ageRangeEl.value;

    // Calcolo il prezzo del biglietto a meno di scontistiche
    let ticketPrice = kmToGo * prezzoPerKm;

    // Calcolo la scontistica se mi trovo in una delle fasce d'età che la prevede
    let ticketType = "Biglietto Standard";
    if(ageRange == "minorenne") {
        ticketPrice *= 0.8;
        ticketType = "Biglietto Minorenni"
    }
    else if(ageRange == "over-65") {
        ticketPrice *= 0.6;
        ticketType = "Biglietto Over 65"
    }

    document.getElementById("ticket-name").innerText = passengerName;
    document.getElementById("ticket-type").innerText = ticketType;
    document.getElementById("ticket-price").innerText = ticketPrice.toFixed(2) + "€";
    document.getElementById("ticket-wrapper").style.display = "block";
})


// Leggo e salvo il riferimento al bottone di annulla
let buttonCancelEl = document.getElementById("btn-cancel");

// Evento nel caso venga cliccato il bottone di annullamento
buttonCancelEl.addEventListener("click", function() {
    document.getElementById("ticket-wrapper").style.display = "none";
})