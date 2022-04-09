import express from "express";
import flatsController from "../controllers/flatsController";

const flatRoute= express.Router();

flatRoute.get("/list",flatsController.list);

flatRoute.get("/:id", flatsController.get);

flatRoute.post("/create",flatsController.post);

flatRoute.put("/update",flatsController.put);

flatRoute.put("/:id/uploadFile", flatsController.uploadFile);

flatRoute.delete("/:id", flatsController.delete);

flatRoute.put(
  "/:flatsId/removeFile/:filename",
  flatsController.deleteFile
);


export default flatRoute;