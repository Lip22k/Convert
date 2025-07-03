const btn = document.querySelector("button");

const footer = document.querySelector("footer");

function conversionCoin(valueCoin, conversionCoin) {
    switch (conversionCoin) {
        case "USD":
            arrayCoin = [5.41, valueCoin * 5.41, "US$ "]
            return arrayCoin
        case "EUR":
            arrayCoin = [6.37, valueCoin * 6.37, "€$ "]
            return arrayCoin
        case "GBP":
            arrayCoin = [7.38, valueCoin * 7.38, "£$ "]
            return arrayCoin
        default:

    }
}
btn.addEventListener("click", () => {
    try {
        let valor = document.getElementById("amount").value;

        let conversion = document.querySelector("select").value;

        let precos = conversionCoin(valor, conversion);

        if (conversion != "" && valor != "" && !isNaN(precos[1])) {
            footer.style.display = "block";
            footer.children[0].innerHTML = `${precos[2]}1 = R$ ${precos[0]}`
            footer.children[1].innerHTML = precos[2] + precos[1].toFixed(2)
        } else {
            alert("Digite somente números")
        }
    }catch(err){
        console.log(err)
    }
})