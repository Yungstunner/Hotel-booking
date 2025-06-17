import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

connectDB();

import cors from "cors";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

app.use(cors()); //Enable cross-origin resource sharing

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

//API to listen clerkWebhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working fine"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
