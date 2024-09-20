import { resolve } from "path";
import { API_URL } from "../../../config";

async function getMovie(id) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MoveDetail({params: {id}}) {
    console.log('start fetching');
    const movie = await getMovie(id);
    const videos = await getVideos(id);
    console.log('end fetching');
    return <h1> {movie.title} </h1>;
}