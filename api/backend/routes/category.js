const router = require("express").Router()

const categoryController = require("../controllers/categoryController")

// funções

// create
router
.route("/category")
.post((req, res) => categoryController.create(req, res))

// read

router.route("/category").get((req, res) => categoryController.getAll(req, res))

// read id

router
.route("/category/:id")
.get((req, res) => categoryController.get(req, res))

// delete

router
.route("/category/:id")
.delete((req, res) => categoryController.delete(req, res))

// update

router
.route("/category/:id")
.put((req, res) => categoryController.update(req, res))


module.exports = router;

