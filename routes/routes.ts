import express from "express";
export const app = express();

import multer from "multer";
import {
  createUsers,
  deleteUsers,
  getAllUsers,
  updateUsers,
} from "../controllers/controllers";
import { checkAuthorization } from "../middlewares/passport";
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
app.post("/resources", checkAutorization, createUsers);
//fetching all the data we created
app.get("/resources", checkAuthorization, getAllUsers);
//updating a resource
app.put("/resources/:id(//d+)", checkAuthorization, updateUsers);
//deleting a resource
app.delete("/resources/:id(//d+)", checkAuthorization, deleteUsers);
//uploading a photo
app.post("/", upload.single("file"), (req, res) => {
  res.json({ message: "hola" });
});
