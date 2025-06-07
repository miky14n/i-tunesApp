
const API_URL = "https://itunes.apple.com/search?term=";

export async function fetchItunesData(search) {
    try {
        const response = await fetch(API_URL + search);
        const result = await response.json();
        console.log(result, "La rp de api");
        return result["results"];
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return [];
    }
}

export function getDataFilter(data, filter) {
  try {

    if (filter !== "all") {
      return data.filter((item) => item.kind === filter);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error en getDataFilter:", error.message);
    return []; 
  }
}

