import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.resolve("movies", "movies.json")

export const getAllMovies = async () => {
    const data = await fs.readFile(moviesPath)
    return JSON.parse(data)
}

export const getMovieById = async id => {
    const movies = await getAllMovies()
    const result = await movies.find(item => item.id === id)
    return result ?? null
}

export const addMovie = async ({ title, director }) => {
    const movies = await getAllMovies();
    const newMovie = {
        id: nanoid(),
        title,
        director,
    }
    movies.push(newMovie);
    await fs.writeFile(moviesPath, JSON.stringify(movies));
    return newMovie;
}