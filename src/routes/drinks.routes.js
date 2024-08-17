import { Router } from "express";
import {getAll, getOne, deleteOne, insertDrink, updateOne} from "../controllers/drinks.controller.js"
export const routerDrinks = Router();

routerDrinks.get("/getAll", getAll);
routerDrinks.get("/getOne/:barcode", getOne);
routerDrinks.get("/deleteOne/:barcode", deleteOne);
routerDrinks.post("/insertDrink",insertDrink);
routerDrinks.put("/updateOne/:barcode", updateOne)