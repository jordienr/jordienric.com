const USERNAME = "hanedanswag";
const API_KEY = "";
const BASE_URL = "https://api.spotify.com/v1";

export async function getTopTracks() {
  const response = await fetch(
    `${BASE_URL}/users/${USERNAME}/top/tracks?limit=50&time_range=long_term`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.items;
}
