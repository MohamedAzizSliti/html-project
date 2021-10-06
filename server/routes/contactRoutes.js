import express  from "express";
import { getAll } from "../controllers/contactControllers.js";
import { get } from "../controllers/contactControllers.js";
import { add } from "../controllers/contactControllers.js";
import { update } from "../controllers/contactControllers.js";
import { del } from "../controllers/contactControllers.js";



const router = express.Router()



router.get('/', getAll)
router.get('/:contactid',get)
router.post('/add/',add )
router.delete('/del/:contactid',del)
router.patch('/update/:contactid', update)  







export default router;
