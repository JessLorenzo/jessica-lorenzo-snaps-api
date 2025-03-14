import "dotenv/config";
import express from "express";
import cors from "cors";
import photosRouter from "./routes/photos.js";

const PORT = process.env.PORT || 8081;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.use("/photos", photosRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
