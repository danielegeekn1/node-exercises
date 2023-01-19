//Retrieve all resources

//In this exercise you'll build on what you created in 'Unit 12, Exercise 1: Create a database and Prisma model'.

//Add a route to your API that retrieves all resources.

import express from "express";
import "express-async-errors";
const app = express();
import bodyParser from "body-parser";
import { app as router } from "../node-exercises/routes/routes";
import { corsOptionsMiddleware } from "./middlewares/middlewares";

const port = process.env.PORT;

app.use(express.json());
app.use(corsOptionsMiddleware);
app.use(bodyParser.json({ limit: "1gb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: 1000000 }));
app.use("/planets", router);
app.listen(port);
