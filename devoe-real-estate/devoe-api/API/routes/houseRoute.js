import express from "express";
import housesController from "../controllers/housesController";

const houseRoute= express.Router();

houseRoute.get("/list",housesController.list);

houseRoute.get("/:id", housesController.get);

houseRoute.post("/create",housesController.post);

houseRoute.put("/update",housesController.put);

houseRoute.put("/:id/uploadFile", housesController.uploadFile);

houseRoute.delete("/:id", housesController.delete);

houseRoute.put(
  "/:sweetsId/removeFile/:filename",
  housesController.deleteFile
);


export default houseRoute;