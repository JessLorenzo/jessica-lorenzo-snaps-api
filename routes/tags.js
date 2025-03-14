import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const tags = JSON.parse(fs.readFileSync("./data/tags.json"));

  res.json(tags);
});

export default router;
