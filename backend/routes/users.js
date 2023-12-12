const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/users")
  .post((req, res) => userController.create(req, res))
  .get((req, res) => userController.getAll(req, res));

// No seu arquivo de rotas para usuários
router.route("/users/:userId/parties")
  .post((req, res) => userController.addPartyToUser(req, res));


router.route("/users/:id")
  .get((req, res) => userController.get(req, res))
  .delete((req, res) => userController.delete(req, res))
  .put((req, res) => userController.update(req, res));

module.exports = router;
