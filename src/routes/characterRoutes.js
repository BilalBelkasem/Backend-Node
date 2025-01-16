const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const characterController = require('../controllers/characterController');
const validate = require('../middleware/validation');


const characterValidation = [
  body('name').notEmpty().isString().trim(),
  body('job').isIn(['Warrior', 'Mage', 'Thief', 'White Mage', 'Black Mage', 'Dragoon']),
  body('level').isInt({ min: 1, max: 99 }),
  body('hp').isInt({ min: 1 }),
  body('mp').isInt({ min: 0 })
];

router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacter);
router.post('/', characterValidation, validate, characterController.createCharacter);
router.put('/:id', characterValidation, validate, characterController.updateCharacter);
router.delete('/:id', characterController.deleteCharacter);

module.exports = router; 
