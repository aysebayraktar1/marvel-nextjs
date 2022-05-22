import CryptoJS from 'crypto-js';
import axios from 'axios';

const ts = Math.floor(Date.now() / 1000);
const privateKey = '1db26c96f96fa40e3617cf36bda8e40f4d4f1e87';
const publicKey = '2298ce09289a8c26882fe80394296b6e';
const hash = CryptoJS.MD5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: { apikey: publicKey, ts: ts },
});

export const getCharacterList = async (limit: number) => {
  const characters = await api.get(`characters?hash=${hash}&limit=${limit}`);

  return characters.data?.data?.results;
};

export const getCharacterById = async (id: string | string[]) => {
  const characters = await api.get(`characters/${id}?hash=${hash}`);

  return characters.data?.data?.results;
};

export const getComicsByCharIdAndOrderDesc = async (
  id: string | string[],
  limit: number,
  orderBy: string
) => {
  const characters = await api.get(
    `characters/${id}/comics?hash=${hash}&limit=${limit}&orderBy=${orderBy}`
  );

  return characters.data?.data?.results;
};
