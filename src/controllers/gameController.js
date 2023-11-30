const gameModel = require('../models/gameModel');
const getAllGames = async (req, res) => {
  try {
    const games = await gameModel.getAllGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const addGame = async (req, res) => {
  try {
    const newGame = req.body;
    // Agregar la URL de la imagen al objeto del juego
    newGame.image_url = req.file ? req.file.path : null;
    await gameModel.addGame(newGame);
    res.json({ message: 'Game added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGame = async (req, res) => {
    try{
        const id = req.params.id;
        await gameModel.deleteGame(id);
        res.json({ message: 'Game deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// En tu controlador (gameController.js)
const updateGame = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedGame = req.body;
      // Agregar la URL de la imagen al objeto del juego
      updatedGame.image_url = req.file ? req.file.path : null;
      await gameModel.updateGame(id, updatedGame);
      res.json({ message: 'Game updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

  const getGameById = async (req, res) => {
    try {
      const id = req.params.id;
      const game = await gameModel.getGameById(id);
      if (!game) {
        return res.status(404).json({ message: 'Game not found' });
      }
      res.json(game);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = { getAllGames, addGame, deleteGame, updateGame,getGameById };