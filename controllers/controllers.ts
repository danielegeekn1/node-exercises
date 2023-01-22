import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllUsers = async (req, res) => {
  const resources = await prisma.anime.findMany();
  res.json(resources);
};
export const updateUsers = async (req, res) => {
  const resource = req.body;
  const data = await prisma.anime.update({
    where: {
      id: Number(req.params.id),
    },
    data: resource,
  });
  res.status(201).json(data);
};
export const deleteUsers = async (req, res, next) => {
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
};
export const createUsers = async (req, res) => {
  const { name, description, time } = req.body;
  const data = await prisma.anime.create({
    data: {
      name: name,
      description: description,
      time: time,
    },
  });
  res.status(200).json(data);
};
