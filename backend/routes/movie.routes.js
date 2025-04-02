import express from "express";
import {
  getTrendingMovie,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMoviesByCategory,
  getMovieCast,
} from "../controllers/movie.controllers.js";
const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);
router.get("/:id/cast", getMovieCast);

export default router;
