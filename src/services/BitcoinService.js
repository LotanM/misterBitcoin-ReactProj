import { storageService } from './storageService'

const axios = require('axios');

export const BitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


const STORAGE_KEY = 'MarketPriceApi'

const marketPrice = getMarketPrice()

function getMarketPrice() {
    let price = storageService.load(STORAGE_KEY)
    if (!price || !price.length) {
        return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .then(res => {
                price = res.data;
                storageService.store(STORAGE_KEY, price)
            })
    }
    return price
}

function getConfirmedTransactions() {

}

function getRate() {
    return axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        .then(res => {
            // console.log('BitcoinService got res:', res)
            return res.data
        })
        .catch(err => {
            console.log('BitcoinService got Error:', err);
        })
}