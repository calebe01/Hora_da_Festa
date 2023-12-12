const router = require("express").Router();
// const serviceController = require("../controllers/serviceController"); se der erro bota isso denovo

// Services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// ...

// User routes
const userRouter = require("./users");

router.use("/", userRouter);

// ...

// Parties routes
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;