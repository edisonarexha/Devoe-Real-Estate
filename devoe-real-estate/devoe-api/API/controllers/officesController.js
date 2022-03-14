import updatedOfficesSchema from "../../validatiors/updatedOfficesSchema";
import Offices from "../models/Offices";
import FileService from "../services/FIleService";

const officesController = {
  list: async (req, res) => {
    const list = await Offices.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Offices.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const officesData = req.body;

    const newOffices = new Offices(officesData);
    await newOffices.save();
    return res.json(newOffices);
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
    const offices = req.body;
    const validationResult=updatedOfficesSchema.validate(offices);

      if(validationResult.error){
          return res.status(400).json({error,message:"Failed to update"});
      }

    try {
      await Offices.updateOne(
        { _id: updateProps.id },
        updateProps
      ); 

      const updatedHouse =Offices.findOne({_id:updateProps.id})

      return res.json(updatedHouse);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { officesId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const officesData = await Offices.findOne(
      { _id: officesId },
      { files: 1 }
    );

    const updatedFilenames = officesData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await officesData.updateOne(
      { _id: officesId },
      {
        files: updatedFilenames,
      }
    );

    const updatedOffices = await Offices.findOne(
      { _id: officesId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedOffices);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const offices = await Offices.find({ _id: id }, { files: 1 });
      const oldFiles = offices.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Offices.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedOffices = await Offices.find({ _id: id });
      return res.json(updatedOffices);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default officesController;