//Retrieve all resources

//In this exercise you'll build on what you created in 'Unit 12, Exercise 1: Create a database and Prisma model'.

//Add a route to your API that retrieves all resources.

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import "express-async-errors";
const app = express();
const port = process.env.PORT;
app.use(express.json());

//RETRIEVE ALL RESOURCES OF MY PRISMA MODEL
app.post("/data", async (req, res) => {
  const { name, description, time } = req.body;
  const data = await prisma.anime.create({
    data: {
      name: name,
      description: description,
      time: time,
    },
  });
  res.status(200).json(data);
});
//fetching all the data we created
app.get("/resources", async (req, res) => {
  const resources = await prisma.anime.findMany();
  res.json(resources);
});
app.listen(port);
