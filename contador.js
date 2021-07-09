window.addEventListener("load", () => {
    const botao = document.getElementById("botao");

    botao.addEventListener("click",() => {

// tempo definido em segundos.
let sec = 10;

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(sec/60);
    let segRestantes = sec % 60;

    if (segRestantes < 10) {
        segRestantes = "0" + segRestantes;
    }

    if (min < 10) {
        min = "0" + min;
    }
// formatação de exibição do tempo
    countDiv.innerHTML = min + " min e " + segRestantes + " seg restantes";

    // condição final
    if (sec > 0) {
        sec = sec - 1;
    }
    else {
        countDiv.innerHTML = "Tempo Esgotado!"
    }

};

const countDown = setInterval(() => secpass(), 1000)

});
})