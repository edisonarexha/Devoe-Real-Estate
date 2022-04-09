import updatedFlatsSchema from "../../validatiors/updatedFlatsSchema";
import Flats from "../models/Flats";
import FileService from "../services/FIleService";

const flatsController = {
  list: async (req, res) => {
    const list = await Flats.find();
    return res.json(list);
  },
  get: async (req, res) => {
    const { id } = req.query;
    const foundItem = await Flats.find({ _id: id });

    return res.json(foundItem);
  },
  post: async (req, res) => {
    const flatsData = req.body;

    const newFlats = new Flats(flatsData);
    await newFlats.save();
    return res.json(newFlats);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await Flats.deleteOne({
        _id: id,
        // userId: req.authId
      });
      return res.json({ deleted: true });
    } catch (err) {}
  },
  put: async (req, res) => {
    const flats = req.body;
    const validationResult=updatedFlatsSchema.validate(flats);

      if(validationResult.error){
          return res.status(400).json({error,message:"Failed to update"});
      }

    try {
      await Flats.updateOne(
        { _id: updateProps.id },
        updateProps
      ); 

      const updatedHouse =Flats.findOne({_id:updateProps.id})

      return res.json(updatedHouse);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  deleteFile: async (req, res) => {
    const { flatsId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const flatsData = await Flats.findOne(
      { _id: flatsId },
      { files: 1 }
    );

    const updatedFilenames = flatsData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await flatsData.updateOne(
      { _id: flatsId },
      {
        files: updatedFilenames,
      }
    );

    const updatedFlats = await Flats.findOne(
      { _id: flatsId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedFlats);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      console.log("files - ", files);

      const flats = await Flats.find({ _id: id }, { files: 1 });
      const oldFiles = flats.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await Flats.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedFlats = await Flats.find({ _id: id });
      return res.json(updatedFlats);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};

export default flatsController;