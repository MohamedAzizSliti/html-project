import express  from "express";
import { getAll } from "../controllers/booksControllers.js";
import { get } from "../controllers/booksControllers.js";
import { add } from "../controllers/booksControllers.js";
import { update } from "../controllers/booksControllers.js";
import { del } from "../controllers/booksControllers.js";



const router = express.Router()



router.get('/', getAll)
router.get('/:bookid',get )
router.post('/add/',add )
router.delete('/del/:bookid',del)
router.patch('/update/:bookid', update)  







export default router;
