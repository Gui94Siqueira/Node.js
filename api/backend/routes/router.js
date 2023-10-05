const router = require("express").Router()

// Category router
const categoryRouter = require("./category")

router.use("/", categoryRouter)

// products routes

const projectsRouter = require("./projects")

router.use("/", projectsRouter)

module.exports = router