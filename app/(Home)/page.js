"use client"
import Link from "next/link";
import { API_URL } from '../config'
import { useEffect, useState } from "react";

export default async function HomePage(){
    const [movies, setMovies] = useState();
    const getMovies = async() => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await response.json();
        setMovies(json);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    );    
}