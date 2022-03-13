import express from "express";
import helmet from "helmet";
import getAuthToken from "./api/middlewares/getAuthToken";
import userRouter from "./api/routes/userRoute";
import cors from 'cors';
import devoeRoute from "./api/routes/devoeRoute";

const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(getAuthToken);


app.use("/users", userRouter);
app.use('/devoe',devoeRoute)

app.listen(port, () => {
  console.log("Devoe listening on", port);
});
