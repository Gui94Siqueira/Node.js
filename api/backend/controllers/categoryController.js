const { Category: CategoryModel } = require("../models/Category")

const categoryController = {
    create: async(req, res) => {
        try {

            const category = {
                name: req.body.name
            }

            const response = await CategoryModel.create(category)

            res.status(201).json({ response, msg: "a categoria foi adicionada com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    }, 
    getAll: async (req, res) => {
        try {
            const category = await CategoryModel.find()

            res.json(category)

        } catch (error) {
            console.log(error)
        }
    },
    get: async(req,res) => {
        try {
            // id => URL === GET
            const id = req.params.id

            const category = await CategoryModel.findById(id)

            if(!category) {
                res.status(404).json({ msg: "categoria não encontrada." })
                return
            }

            res.json(category)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
    try {

        const id = req.params.id

        const category = await CategoryModel.findById(id)

        if (!category) {
            res.status(404).json({ msg: "Categoria não encontrada." })
            return
        }

        const deletedCategory = await CategoryModel.findByIdAndDelete(id)

        res.status(200).json({deletedCategory, msg: "Serviço excluido com sucesso."})

    } catch (error) {
        console.log(error)
    }
    },
    update: async (req, res) => {

        const id = req.params.id

        const category = {
            name: req.body.name,
        }

        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, category)

        if (!updatedCategory) {
            res.status(404).json({ msg: "Categoria não encontrada." })
            return;
        }

        res.status(200).json({category, msg: "Categoria atualizada com sucesso."})
    }
}


module.exports = categoryController