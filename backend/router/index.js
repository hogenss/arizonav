const Router = require('express').Router
const userController = require('../controllers/userController')
const discordController = require('../controllers/discordController')
const formsController = require('../controllers/formsController')
const sessionController = require('../controllers/sessionController')
const passport = require("passport");
const authMiddleware = require('../middlewares/auth-middleware')

const router = new Router();

router.get('/user', userController.user)
router.get('/users', authMiddleware, userController.getUsers)
router.put('/user/update', authMiddleware, userController.updateUser)
router.put('/user/delete', authMiddleware, userController.deleteUser)
router.put('/session/delete', authMiddleware, sessionController.deleteSessions)


router.get('/forms', authMiddleware, formsController.getForms)
router.put('/form/create', authMiddleware, formsController.createForm)
router.put('/form/update', authMiddleware, formsController.updateForm)


router.get('/discord', passport.authenticate('discord'), discordController.discord)
router.get('/discord/redirect', passport.authenticate('discord'), discordController.redirectDiscord)

module.exports = router