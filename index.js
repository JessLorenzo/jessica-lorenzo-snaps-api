import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8081;
const app = express();
