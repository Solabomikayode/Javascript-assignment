function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
}

// Exchange rate from USD to NGN
const usdToNgnRate = 1573.01;

// Amount in USD
const amountInUSD = 100;

// Convert USD to NGN
const amountInNGN = convertCurrency(amountInUSD, usdToNgnRate);

// Display the result
console.log(`${amountInUSD} USD is equal to ${amountInNGN} NGN`);
