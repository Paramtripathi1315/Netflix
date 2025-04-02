import express from "express";
import {
  getTrendingTv,
  getTvTrailers,
  getTvDetails,
  getSimilarTvs,
  getTvsByCategory,
  getTvCast,
} from "../controllers/tv.controllers.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);
router.get("/:id/cast", getTvCast);

export default router;
