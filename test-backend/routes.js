const express = require('express');
const userController = require('./controllers/userController');
const { validateJWT } = require('./middlewares');
const upload = require('./middlewares/upload');

const router = express.Router();

router.post('/user', userController.newUser);
router.get('/user', userController.listUser);
router.get('/user/:id', userController.listSingleUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/', userController.deleteUser);

module.exports = router;
