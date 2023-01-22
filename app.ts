import express from "express";
import { app as usersRouter } from "./routes/routes";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
