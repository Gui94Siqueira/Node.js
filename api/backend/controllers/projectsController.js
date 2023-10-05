const ProjectModel = require("../models/Projects")

const checkProjectsBudget = (budget, costs) => {

    const priceSum = costs.reduce((sum, costs) => sum + costs.price, 0)

    if (priceSum > budget) {
        return false
    }

    return true
}

const projectController = {
    create: async (req, res) => {
        try {
            const projects = {
                name: req.body.name,
                budget: req.body.budget,
                category: req.body.category,
                costs: req.body.cost,
                services: req.body.services,

            }

            if(projects.costs && checkProjectsBudget) {

            }
        } catch (error) {
            console.log(error)
        }
    } 
}


module.exports = projectController