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
//1st creating our first data according to our Prisma model
app.post("/data", async (req, res) => {
  const data = await prisma.anime.createMany({
    data: [
      {
        id: 1,
        name: "One Piece",
      },
      {
        id: 2,
        name: "Demon Slayer",
      },
    ],
  });
  res.status(201).json(data);
});
//2nd fetching all the data we created
app.get("/resources", async (req, res) => {
  const resources = await prisma.anime.findMany();
  res.json(resources);
});
app.listen(port);
