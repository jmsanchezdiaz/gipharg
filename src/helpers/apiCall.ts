import { GifType } from '../types/interfaces';

interface PromiseResponse {
  data: GifType[];
}

const API_KEY = '&api_key=' + process.env.REACT_APP_API_KEY;
export const apiCall = {
  trendings: async (): Promise<PromiseResponse> => {
    const authUrl = 'https://api.giphy.com/v1/gifs/trending?limit=12' + API_KEY;
    try {
      const req = await fetch(authUrl);
      const response = await req.json();
      return response;
    } catch (err) {
      throw err;
    }
  },
  search: async (query: string): Promise<PromiseResponse> => {
    const authUrl = 'https://api.giphy.com/v1/gifs/search?q=' + query + API_KEY;
    try {
      const req = await fetch(authUrl);
      const response = await req.json();
      return response;
    } catch (err) {
      throw err;
    }
  },
};
