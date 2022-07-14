let fs = require("fs");
let path = require("path");

let dataJson = fs.readFileSync(path.join(__dirname, "../data/movies.json"));
let movies = JSON.parse(dataJson);

function writeJson() {
  let data = JSON.stringify(movies);
  fs.writeFileSync(path.join(__dirname, "../data/movies.json"));
}

module.exports = {
  list: (req, res) => {
    //devolver una respuesta
    res.render("movie-list", { movies });
  },
  detail: (req, res) => {
    //Buscar una pelicula
    let movieEcontrada = movies.find(function (movie) {
      return movie.id == req.params.id;
    });

    //devolver una respuesta
    res.render("movie-detail", { movie: movieEcontrada });
  },
  create: (req, res) => {
    res.render("movie-create-form");
  },
  store: (req, res) => {
    //crear peliculas
    let newMovie = {
      id: movies.length + 1,
      title: req.body.title,
      genre: req.body.genre,
      rating: Number(req.body.rating),
      image: req.file.filename,
    };
    movies.push(newMovie);

    //modificar Json
    writeJson();
    res.render("/movies/list");
  },
  edit: (req, res) => {
    //Buscar una pelicula
    let movieEcontrada = movies.find(function (movie) {
      return movie.id == req.params.id;
    });
    res.render("movie-edit-form", { movie: movieEcontrada });
  },
  update: (req, res) => {
    //traer la pelicula que queremos modificar
    let movie = movies.find(function (movie) {
      return movie.id == req.params.id;
    });

    movie.title = req.body.title;
    movie.rating = Number(req.body.rating);
    movie.genre = req.body.genre;
    movie.file = req.file ? req.file.filename : movie.file;

    res.redirect("/movies/list");
  },
  destroy: (req, res) => {
    let movieIndex = movies.findIndex(function (movie) {
      return movie.id == req.params.id;
    });

    movies.splice(movieIndex, 1);

    writeJson();

    res.redirect("/movies/list");
  },
};
