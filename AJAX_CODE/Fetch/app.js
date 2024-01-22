

let updateBtn = document.querySelector('#updateBtn')
let priceH1 = document.querySelector('h1')

updateBtn.addEventListener('click', () => {
    updatePriceH1()
})

async function updatePriceH1() {
    try {
        let res = await (await getBitcoinPrice()).json()
        let price = res.ticker.price
        priceH1.innerText = price
    }
    catch (e) {
        console.log('ERROR!')
        console.log(e)
    }
}

function getBitcoinPrice() {
    return fetch('https://api.cryptonator.com/api/ticker/btc-usd')
}

updatePriceH1()