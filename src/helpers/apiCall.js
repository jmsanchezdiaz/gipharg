const API_KEY = "&api_key=NTVLYSitef89MlK7fHebEyNzZAkCEEuz";
export const apiCall = async (url) => {
  const authUrl = url + API_KEY;
  try {
    const req = await fetch(authUrl);
    const response = await req.json();
    return response;
  } catch (err) {
    throw err;
  }
};
