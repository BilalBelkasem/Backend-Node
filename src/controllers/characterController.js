const { Op } = require('sequelize');
const Character = require('../models/character');

exports.getAllCharacters = async (req, res) => {
  const { limit = 10, offset = 0, name } = req.query;
  
  try {
    const where = name ? {
      name: {
        [Op.like]: `%${name}%`
      }
    } : {};
    
    const { count, rows: characters } = await Character.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
    
    res.json({
      data: characters,
      total: count,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    
    await character.update(req.body);
    res.json(character);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    
    await character.destroy();
    res.json({ message: 'Character deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 