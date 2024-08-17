import Drink from "../models/drinks.model.js"

export const drinkDAO = {};

drinkDAO.getAll = async() => {
    return await Drink.find();
}
drinkDAO.getOne = async(barcode) => {
    return await Drink.findOne({barcode:barcode})
}
drinkDAO.insertDrink = async(drink) => {
    return await Drink.create(drink)
}
drinkDAO.deleteOne = async(barcode) => {
    return Drink.findOneAndDelete({barcode:barcode})
}
drinkDAO.updateOne = async (barcode, updateData) => {
    return await Drink.findOneAndUpdate(
        { barcode: barcode },  // Filtro para encontrar el registro por barcode
        { $set: updateData },  // Actualiza solo los campos proporcionados en updateData
        { new: true, runValidators: true }  // Devuelve el documento actualizado y aplica validadores
    );
};