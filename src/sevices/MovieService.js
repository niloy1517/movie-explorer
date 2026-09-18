export const fetchMovies = async () => {
    try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching movies in service:", error);
        return [];
    }
}


export const searchMovies = async (query) => {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error search in service:", error);
        return [];
    }
}
