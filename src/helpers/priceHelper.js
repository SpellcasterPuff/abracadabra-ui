import axios from "axios";

const chainCoinGeckoIds = {
  1: "ethereum",
  10: "optimistic-ethereum",
  56: "binance-smart-chain",
  137: "polygon-pos",
  250: "fantom",
  42161: "arbitrum-one",
  43114: "avalanche",
};

const config = {
  headers: {
    "X-Cg-Pro-Api-Key": process.env.VUE_APP_COINGECKO_API_KEY,
  },
};

const getTokensArrayPrices = async (chainId, addressArr) => {
  try {
    const chainCoinGeckoId = chainCoinGeckoIds[chainId];

    if (!chainCoinGeckoId) return false;

    const pricesResponse = await axios.get(
      `https://api.coingecko.com/api/v3/simple/token_price/${chainCoinGeckoId}?contract_addresses=${addressArr.join()}&vs_currencies=usd`,
      config
    );

    const respToArray = [];

    for (const property in pricesResponse.data) {
      respToArray.push({
        address: property.toLowerCase(),
        price: pricesResponse.data[property].usd,
      });
    }

    return respToArray;
  } catch (e) {
    console.log("TOKEN PRICE ERR:", e);
    return false;
  }
};

const getTokenPriceByAddress = async (chainId, address) => {
  try {
    const chainCoinGeckoId = chainCoinGeckoIds[chainId];

    if (!chainCoinGeckoId) return false;

    const pricesResponse = await axios.get(
      `https://api.coingecko.com/api/v3/simple/token_price/${chainCoinGeckoId}?contract_addresses=${address}&vs_currencies=usd`,
      config
    );

    let price = null;

    for (const property in pricesResponse.data) {
      price = pricesResponse.data[property]?.usd;
    }

    return price;
  } catch (e) {
    console.log("TOKEN PRICE ERR:", e);
    return false;
  }
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { getTokenPriceByAddress, getTokensArrayPrices, numberWithCommas };
