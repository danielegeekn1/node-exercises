import express from "express";
import { app as usersRouter } from "./routes/routes";
import { initSessionMiddleware } from "./middlewares/session";
import { passport } from "./middlewares/passport";
const app = express();
const port = process.env.PORT;
app.use(initSessionMiddleware());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/", usersRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
