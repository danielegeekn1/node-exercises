import express from "express";
export const app = express();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
//RETRIEVE ALL RESOURCES OF MY PRISMA MODEL
app.post("/resources", async (req, res) => {
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
//updating a resource
app.put("/resources/:id(//d+)", async (req, res) => {
  const resource = req.body;
  const data = await prisma.anime.update({
    where: {
      id: Number(req.params.id),
    },
    data: resource,
  });
  res.status(201).json(data);
});
//deleting a resource
app.delete("/resources/:id(//d+)", async (req, res, next) => {
  const planetId = Number(req.params.id);
  try {
    await prisma.anime.delete({
      where: { id: planetId },
    });
    res.status(201).end();
  } catch (e) {
    res.status(404);
    next(`Cannot delete the resource with ${planetId}`);
  }
});
//uploading a photo
app.post("/", upload.single("file"), (req, res) => {
  res.json({ message: "hola" });
});
