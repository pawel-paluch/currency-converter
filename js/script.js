{
    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");
        const moneyElement = document.querySelector(".js-cash");
        const resetButton = document.querySelector(".js-resetButton");

        const calculateResult = () => {
            const amount = amountElement.value;
            const currency = currencyElement.value;
            let result = 0;

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

            resultElement.innerText = `${amount} PLN to ${result.toFixed(2)}`;
        };

        const resetForm = () => {
            formElement.reset();
            resultElement.innerText = "";
            moneyElement.innerText = "";
        };

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResult();
        });

        resetButton.addEventListener("click", () => {
            resetForm();
        });
    };

    init();

}