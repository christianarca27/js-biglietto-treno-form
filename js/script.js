let buttonEl = document.getElementById("btn-genera");
console.log(buttonEl);

buttonEl.addEventListener("click", function() {
    let nomePasseggeroEl = document.getElementById("nome-passeggero");
    let nomePasseggero = nomePasseggeroEl.value;
    console.log(nomePasseggero);

    let kmPercorsiEl = document.getElementById("km-da-percorrere");
    let kmPercorsi = kmPercorsiEl.value;
    console.log(kmPercorsi);
    
    let fasciaEtaEl = document.getElementById("fascia-eta");
    let fasciaEta = fasciaEtaEl.value;
    console.log(fasciaEta);

    let prezzoBiglietto = kmPercorsi * 0.21;

    if(fasciaEta == "minorenne") {
        prezzoBiglietto *= 0.8;
    }
    else if(fasciaEta == "over-65") {
        prezzoBiglietto *= 0.6;
    }

    document.writeln("Il prezzo del biglietto di " + nomePasseggero + " è di " + prezzoBiglietto + "€");
})