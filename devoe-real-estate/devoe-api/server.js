import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import getAuthToken from "./api/middlewares/getAuthToken";
import userRoute from "./api/routes/userRoute";
import houseRoute from "./api/routes/houseRoute";
import flatRoute from "./api/routes/flatRoute";
import officeRoute from "./api/routes/officeRoute";
import fileupload from "express-fileupload";

mongoose.connect("mongodb://localhost:27017/devoe-db").then(() => {
  console.log("connected to mongodb on port 27017");
});

const app = express();

const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static(`${__dirname}/public/files`));

app.use(helmet());

app.use(fileupload());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(getAuthToken);

app.use("/users", userRoute);

app.use("/houses", houseRoute);

app.use("/flats", flatRoute);

app.use("/offices", officeRoute);

app.listen(port, () => {
console.log(`Devoe listening on: ${port}`);
});