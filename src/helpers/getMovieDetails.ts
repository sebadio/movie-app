const url = "https://api.themoviedb.org/3/movie/";
const token = import.meta.env.PUBLIC_TOKEN;
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: token,
    },
};

export const getMovieDetails = async (id: string) => {
    try {
        const response = await fetch(url + id, options);

        if (!response.ok) throw new Error("Error fetching movie details");
        if (response.status === 404) throw new Error("Movie not found");

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
