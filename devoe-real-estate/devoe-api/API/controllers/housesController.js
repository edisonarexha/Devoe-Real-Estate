import updatedHousesSchema from "../../validatiors/updateHousesSchema";
import Houses from "../models/Houses";
import FileService from "../services/FIleService";

const housesController = {
  list: async (req, res) => {
    const list = await Houses.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Houses.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const housesData = req.body;

    const newHouses = new Houses(housesData);
    await newHouses.save();
    return res.json(newHouses);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await RealEstateModel.deleteOne({
        _id: id,
        // userId: req.authId
      });
      return res.json({ deleted: true });
    } catch (err) {}
  },
  put: async (req, res) => {
    const houses = req.body;
    const validationResult=updatedHousesSchema.validate(houses);

      if(validationResult.error){
          return res.status(400).json({error,message:"Failed to update"});
      }

    try {
      await Houses.updateOne(
        { _id: updateProps.id },
        updateProps
      ); 

      const updatedHouse =Houses.findOne({_id:updateProps.id})

      return res.json(updatedHouse);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { housesId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const housesData = await Houses.findOne(
      { _id: housesId },
      { files: 1 }
    );

    const updatedFilenames = housesData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await housesData.updateOne(
      { _id: housesId },
      {
        files: updatedFilenames,
      }
    );

    const updatedHouses = await Houses.findOne(
      { _id: housesId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedHouses);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const houses = await Houses.find({ _id: id }, { files: 1 });
      const oldFiles = houses.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Houses.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedHouses = await Houses.find({ _id: id });
      return res.json(updatedHouses);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default housesController;