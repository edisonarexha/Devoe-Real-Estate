import express from "express";
import officesController from "../controllers/officesController";

const officeRoute= express.Router();

officeRoute.get("/list",officesController.list);

officeRoute.get("/:id", officesController.get);

officeRoute.post("/create",officesController.post);

officeRoute.put("/update",officesController.put);

officeRoute.put("/:id/uploadFile", officesController.uploadFile);

officeRoute.delete("/:id", officesController.delete);

officeRoute.put(
  "/:sweetsId/removeFile/:filename",
  officesController.deleteFile
);


export default officeRoute;