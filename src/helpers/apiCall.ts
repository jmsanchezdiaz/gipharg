import { GifType } from "../types/interfaces";

interface PromiseResponse {
  data : GifType[]
}

const API_KEY = "&api_key=" + process.env.REACT_APP_API_KEY;
export const apiCall = async (url : string):Promise<PromiseResponse> => {
  const authUrl = url + API_KEY;
  try {
    const req = await fetch(authUrl);
    const response = await req.json();
    return response;
  } catch (err) {
    throw err;
  }
};
