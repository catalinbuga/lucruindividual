import express from "express"
import { addToys,listToys,removeToys } from "../controllers/toysController.js"
import multer from "multer"

const toysRouter = express.Router();

//image storge engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

toysRouter.post("/add", upload.single("image"), addToys);
toysRouter.get("/list",listToys)
toysRouter.post("/remove",removeToys);





export default toysRouter;
