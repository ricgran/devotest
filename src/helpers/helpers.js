import axios from "axios";

export async function CallAPI(phrase) {
    try {
        const results = await axios.get(`https://movies-mock-api-s7oiqxtmzq-lz.a.run.app/api/movies?q=${ phrase }`);
        return results.data;
    }catch(e) {
        return [];
    }
}