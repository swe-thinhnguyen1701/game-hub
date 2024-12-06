import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    }
});

console.log("API Key:", import.meta.env.VITE_RAWG_API_KEY);