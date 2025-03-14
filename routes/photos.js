import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const photos = JSON.parse(fs.readFileSync("./data/photos.json"));

  res.json(photos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const photos = JSON.parse(fs.readFileSync("./data/photos.json"));

  const foundPhoto = photos.find((photo) => photo.id === id);

  if (foundPhoto) {
    res.json(foundPhoto);
  } else {
    res.sendStatus(404);
  }
});

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;

  const photos = JSON.parse(fs.readFileSync("./data/photos.json"));

  const foundPhoto = photos.find((photo) => photo.id === id);

  if (foundPhoto) {
    res.json(foundPhoto.comments);
  } else {
    res.sendStatus(404);
  }
});

export default router;
