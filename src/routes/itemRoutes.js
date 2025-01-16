const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const itemController = require('../controllers/itemController');
const validate = require('../middleware/validation');


const itemValidation = [
  body('name').notEmpty().isString().trim(),
  body('type').isIn(['Weapon', 'Armor', 'Accessory', 'Potion', 'Key Item']),
  body('rarity').isInt({ min: 1, max: 5 }),
  body('value').isInt({ min: 0 }),
  body('description').notEmpty().isString()
];

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.post('/', itemValidation, validate, itemController.createItem);
router.put('/:id', itemValidation, validate, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router; 
