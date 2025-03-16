import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

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

router.post("/:id/comments", (req, res) => {
  const commentBody = req.body;
  const { id } = req.params;

  const photos = JSON.parse(fs.readFileSync("./data/photos.json"));
  const foundPhoto = photos.find((photo) => photo.id === id);

  const newComment = {
    name: commentBody.name,
    comment: commentBody.comment,
    id: uuidv4(),
    timestamp: Date.now(),
  };

  foundPhoto.comments.push(newComment);
  fs.writeFileSync("./data/photos.json", JSON.stringify(photos));

  console.log("Request body", newComment);

  res.status(201).json(newComment);
});

export default router;
