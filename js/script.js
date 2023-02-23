const prezzoPerKm = 0.21;

// Leggo e salvo il riferimento al bottone di generazione
let buttonEl = document.getElementById("btn-genera");
console.log(buttonEl);

// Evento nel caso venga cliccato il bottone di generazione del biglietto
buttonEl.addEventListener("click", function() {
    //Leggo e salvo il valore dell'input "Nome Cognome"
    let nomePasseggeroEl = document.getElementById("nome-passeggero");
    let nomePasseggero = nomePasseggeroEl.value;
    console.log(nomePasseggero);

    //Leggo e salvo il valore dell'input "Km da percorrere"
    let kmPercorsiEl = document.getElementById("km-da-percorrere");
    let kmPercorsi = kmPercorsiEl.value;
    console.log(kmPercorsi);
    
    //Leggo e salvo il valore dell'input "Fascia d'età"
    let fasciaEtaEl = document.getElementById("fascia-eta");
    let fasciaEta = fasciaEtaEl.value;
    console.log(fasciaEta);

    // Calcolo il prezzo del biglietto a meno di scontistiche
    let prezzoBiglietto = kmPercorsi * prezzoPerKm;

    // Calcolo la scontistica se mi trovo in una delle fasce d'età che la prevede
    if(fasciaEta == "minorenne") {
        prezzoBiglietto *= 0.8;
    }
    else if(fasciaEta == "over-65") {
        prezzoBiglietto *= 0.6;
    }

    // TEST: Stampo in pagina il risultato finale
    document.getElementById("biglietto").innerText = "Il prezzo del biglietto di " + nomePasseggero + " è di " + prezzoBiglietto + "€";
})