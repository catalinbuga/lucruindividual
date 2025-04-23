import { log } from "console";
import toysModel from "../models/toysModel.js";
import fs from "fs";

// add toys

const addToys = async (req, res) => {
  console.log("REQ.BODY:", req.body);
  console.log("REQ.FILE:", req.file);

  try {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.price ||
      !req.body.category ||
      !req.file
    ) {
      return res.status(400).json({ success: false, message: "Toate câmpurile sunt necesare!" });
    }

    const image_filename = req.file.filename;

    const toys = new toysModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await toys.save();
    res.json({ success: true, message: "Jucarie Adaugata!" });

  } catch (error) {
    console.log("EROARE:", error);
    res.status(500).json({ success: false, message: "Eroare la salvare", error: error.message });
  }
};

//toate jucariile lista
const listToys = async (req,res) => {
    try{
        const toys = await toysModel.find({});
        res.json({success:true,data:toys})
    }catch (error) {
        console.log(error);
        res.json({ success: false, message: "Eroare" });
    }
}
// stergem dinn bd 
const removeToys = async (req, res) => {
    try {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ success: false, message: "ID-ul este necesar." });
      }
  
      const toy = await toysModel.findById(id);
      if (!toy) {
        return res.status(404).json({ success: false, message: "Jucăria nu a fost găsită." });
      }
  
      // stergem imaginea
      const imagePath = `uploads/${toy.image}`;
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log("Eroare la ștergerea fișierului:", err);
        } else {
          console.log("Fișier șters:", imagePath);
        }
      });
  
      // stergem din BD
      await toysModel.findByIdAndDelete(id);
      res.json({ success: true, message: "Jucărie ștearsă." });
    } catch (error) {
      console.log("EROARE:", error);
      res.status(500).json({ success: false, message: "Eroare la ștergere" });
    }
  };
  
export { addToys,listToys,removeToys };
