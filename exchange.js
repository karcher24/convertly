document.addEventListener("DOMContentLoaded", function () {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY = "oRMrnM3FQ056x0MYqapXkA==Glkw7qjoeqH1SFCn"
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=GBP_"

    convert.addEventListener("click", () => {
        console.log('hi')
        const amountTotal = amount.value;
        console.log('total', amountTotal)
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
        console.log('url', url)

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }

        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate', rate)
            const resultPrice = amountTotal * rate;
            console.log('result', resultPrice)
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} GBP`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occurred please try again later.'
            })

    })
})

