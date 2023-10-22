
import { program } from "commander";
import *as movieService from "./movies/index.js";

const invokeAction = async ({ action, id, title, director }) => {
    switch (action) {
        case "list":
            const movieList = await movieService.getAllMovies();
            console.log(movieList);
        case "getById":
            const oneMovie = await movieService.getMovieById(id);
            return console.log(oneMovie)
        case "add":
            const newMovie = await movieService.addMovie({ title, director });
            return console.log(newMovie)
        case "updateById":
            const updateMovie = await movieService.updateMovieById(id, { title, director });
            return console.log(updateMovie)
        case "deleteById":
            const deleteMovieId = await movieService.deleteMovie(id)
            return console.log(deleteMovieId)
        default: console.log("Uncnown action")
    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-d, --director <type>")

program.parse();

const options = program.opts();
invokeAction(options);