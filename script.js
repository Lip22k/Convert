const btn = document.querySelector("button");

const footer = document.querySelector("footer");

function conversionT(valueCoin, conversionCoin) {
    switch (conversionCoin) {
        case "USD":
            arrayCoin = [5.41, valueCoin*5.41, "US$ "]
            return arrayCoin
        case "EUR":
            arrayCoin = [6.37, valueCoin*6.37, "€$ "]
            return arrayCoin
        case "GBP":
            arrayCoin = [7.38, valueCoin*7.38, "£$ "]
            return arrayCoin
        default:

    }
}
btn.addEventListener("click", () => {
    let valor = document.getElementById("amount").value;

    let conversion = document.querySelector("select").value;

    if (conversion != "" && valor!="") {
        footer.style.display = "block";
        precos = conversionT(valor, conversion);

        footer.children[0].innerHTML = `${precos[2]}1 = R$ ${precos[0]}`
        footer.children[1].innerHTML = precos[2]+precos[1].toFixed(2)
    }
})