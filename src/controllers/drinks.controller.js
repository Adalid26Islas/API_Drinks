import { drinkDAO } from "../daos/drinks.dao.js";

export const getAll = async (req, res) =>{
    await drinkDAO.getAll()
    .then((drinks) => {
        res.json(drinks);
    })
    .catch((err) => {
        res.json({message:err})
    })
};

export const insertDrink = async (req, res) => {
    await drinkDAO.insertDrink(req.body)
    .then((drink) =>{
        res.json(drink)
    })
    .catch((err)=> {
        res.json({message:err});
    });
}

export const getOne = async (req, res) =>{
    await drinkDAO.getOne(req.params.barcode)
    .then((drink) => {
        if(drink !=null)
            res.json(drink)
        else
        res.json({message:"Drink not found"});
    })
    .catch(err =>{
        res.json({message:err});
    })
}

export const deleteOne = async (req, res) =>{
    await drinkDAO.deleteOne(req.params.barcode)
    .then((drink) => {
        if(drink !=null)
            res.json(drink)
        else
        res.json({message:"Drink not found"});
    })
    .catch(err =>{
        res.json({message:err});
    })
}

export const updateOne = async (req, res) => {
    try {
        const updatedDrink = await drinkDAO.updateOne(req.params.barcode, req.body);
        if (!updatedDrink) {
            return res.status(404).json({ message: "Drink not found" });
        }
        res.json(updatedDrink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
