
const API_URL = "https://itunes.apple.com/search?term=";

export async function fetchItunesData(search) {
    try {
        const response = await fetch(API_URL + search);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        return [];
    }
}
