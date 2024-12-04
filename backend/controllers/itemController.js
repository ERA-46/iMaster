const Item = require('../models/items');
const mongoose = require('mongoose');

const getAllItems = async(req, res) => {
    const items = await Item.find({}).sort({createdAt: -1});
    res.status(200).json({items});
};

const getItem = async(req, res) => {
    try{
        const { id } = req.params;      
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'Invalid Mongo id'});
        }
    
        const item = await Item.findById(id);
    
        if(!item){
            return res.status(404).json({mssg: 'Item not found'});
        }   
        res.status(200).json({item});

    }catch(error){
        res.status(500).json({mssg: 'Error getting item', error});
    } 
};

const createItem = async(req, res) => {

    const {name , description, price, quantity, category} = req.body;
    try{
        const imageUrl = req.file? `/uploads/${req.file.filename}` : null
        const item = new Item({
            name, 
            description, 
            price, 
            quantity, 
            category, 
            image: imageUrl
        });
        await item.save();
        res.status(200).json({mssg: 'Item added successfully', item: item});

    }catch(error){
        res.status(500).json({mssg: 'Error creating item', error: error.message});

    }
};

const deleteItem = async(req, res) => {
    try{
        const { id } = req.params; 

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'Invalid Mongo id'});
        }
    
        const item = await Item.findByIdAndDelete({_id: id});
    
        if(!item){
            return res.status(404).json({mssg: 'Item not found'});
        }
    
        res.status(200).json({mssg: 'Item deleted successfully'});
        
    }catch(error){
        res.status(500).json({mssg: 'Error deleting item', error});
    }
};


const updateItem = async(req, res) => {
    const { id } = req.params;
    const {name , description, price, quantity, category} = req.body;

    try{

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'Invalid Mongo id'});
        }

        const item =  await Item.findById(id);
        
        if(!item){
            return res.status(404).json({mssg: 'Item not found'});
        }

        item.name = name || item.name;
        item.description = description || item.description;
        item.price = price || item.price;
        item.quantity = quantity || item.quantity;
        item.category = category || item.category;

        if(req.file){
            item.image = `/uploads/${req.file.filename}`;
        }
        
        await item.save();
        res.status(200).json({mssg: 'Item updated successfully', item: item});

    }catch(error){
        res.status(500).json({mssg: 'Error updating item', error});
    }
};


module.exports = {
    createItem,
    getAllItems,
    getItem,
    deleteItem,
    updateItem
};