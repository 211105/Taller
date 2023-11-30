const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const multer = require('multer');
// Configuración de Multer para la carga de imágenes

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imagenes'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
  },
});


const upload = multer({ storage: storage });
// Rutas
//Listar
router.get('/', gameController.getAllGames);
//agregar
router.post('/games', upload.single('image_url'), gameController.addGame);
//eliminar
router.delete('/games/:id', gameController.deleteGame);
//actualizar
router.put('/games/:id', gameController.updateGame);

router.get('/games/:id', gameController.getGameById);

module.exports = router;