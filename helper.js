import { client } from "./index.js";

export async function getMoviesById(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .findOne({ id: id });
}


export async function deleteMoviesById(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .deleteOne({ id: id });
}

export async function editMoviesById(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
}

export async function getAllMovies() {
  return await client
    .db("b30wd")
    .collection("movies")
    .find({})
    .toArray();
}

export async function createUser(data){
  return await client.db("b30wd").collection("users").insertOne(data);
}

