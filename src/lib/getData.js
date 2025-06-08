
const API_URL = "https://itunes.apple.com/search?term=";

export function sortByAlbun(data) {
  try {
    const seen = {}; 
    const uniqueByCollectionId = [];

    for (const item of data) {
      if (!seen[item.collectionId]) {
        uniqueByCollectionId.push(item);
        seen[item.collectionId] = true; 
      }
    }
    return uniqueByCollectionId;
  } catch (error) {
    console.error("Error en getDataFilter:", error.message);
    return [];
  }
}

export async function fetchItunesData(search) {
    try {
        const response = await fetch(API_URL + search);
        const result = await response.json();
        const data=sortByAlbun(result["results"])
        return data;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return [];
    }
}

export function getDataFilter(data, filter) {
  try {

    if (filter !== "all") {
      return data.filter((item) => item.wrapperType === filter);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error en getDataFilter:", error.message);
    return []; 
  }
}

