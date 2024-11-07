const express = require('express');
const router = express.Router();
const {
    createItem,
    getItem,
    getAllItems,
    deleteItem,
    updateItem
} = require('../controllers/itemController');

//multer setup
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });


//Get all items
router.get('/', getAllItems);

//Get single item
router.get('/:id', getItem);

//Post new item
router.post('/', upload.single('image'), createItem);

//Update existing item
router.patch('/:id', upload.single('image'), updateItem);

//Delete item
router.delete('/:id', deleteItem);

module.exports = router;
 