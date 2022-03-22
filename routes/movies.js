import express from 'express';
import express from "express";import {createMovies, deleteMovieById,getAllMovies,getMovieById,updateMovieById} from "../helper.js";
const router = express.Router();
router.get("/movies",async function (request, response) {

  const movies = await getAllMovies();
  response.send(movies);
});

router.get("/id", async function (request, response) {
  // db.movies.find({})
console.log(request.params)
const{id}=request.params;
  const movie = await getMoviesById(id);
   console.log(movie);
   movie
   ? response.send(movie)
   : response.status(404).send({ message: "No such movie found 😅" });


});
 

router.delete("/:id", async function (request, response) {
  // db.movies.find({})
  console.log(request.params)

  const{id}=request.params;
  const result = await deleteMoviesById(id);
    
  response.send(result)
});

router.put("/:id", async function (request, response) {
  console.log(request.params);

  // db.movies.updateOne({id: "102"}, {$set: upadateData})
  const { id } = request.params;
  const updateData = request.body;

  const result = await editMoviesById(id, updateData);
  response.send(result);
});


router.post("/", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db("b30wd").collection("movies").insertMany(data);
  response.send(result);
});

export const moviesRouter = router;