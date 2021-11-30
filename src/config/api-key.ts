import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = 'e7d2789017ac2e7e2777c24c57e4912e';
const privateKey = '318ebd53a661397fbbef0ae4f33b40f7759208aa';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;