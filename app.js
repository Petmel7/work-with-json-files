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
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "5" });
// invokeAction({ action: "add", title: "The Creator", director: "Gareth Edwards" });
// invokeAction({ action: "updateById", id: "1", title: "Killers of the Flower Moon", director: "Martin Scorsese" });
// invokeAction({ action: "deleteById", id: "3" });

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    // console.log(action);
    invokeAction({ action });
    
}