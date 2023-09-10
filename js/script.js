const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const moneyElement = document.querySelector(".js-cash");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const currency = currencyElement.value;
    let result = resultElement.value;

    const rateUSD = 4.1124;
    const rateEUR = 4.4768;
    const rateCHF = 4.6718;


    switch (currency) {
        case "rateUSD":
            result = amount / rateUSD;
            moneyElement.innerText = "USD";
            break;

        case "rateEUR":
            result = amount / rateEUR;
            moneyElement.innerText = "EURO";
            break;

        case "rateCHF":
            result = amount / rateCHF;
            moneyElement.innerText = "CHF";
            break;

    }
    resultElement.innerText = `${amount} PLN to  ${result.toFixed(2)}`;
})

