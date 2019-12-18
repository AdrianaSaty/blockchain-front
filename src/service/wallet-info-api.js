const axios = require('axios');

async function getWalletInfo(publicKey) {
  const wallet =  await axios.post({
    method: 'post',
    url: 'http://localhost:5000/api/wallets/get-user-wallet-info',
    data: {
      publicKey
    },
  });
  return wallet.data;
} 

module.exports = {
  getWalletInfo,
}