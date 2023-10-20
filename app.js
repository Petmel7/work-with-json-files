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
        default: console.log("Uncnown action")
    }
}
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "5" });
invokeAction({ title: "The Creator", director: "Gareth Edwards" });