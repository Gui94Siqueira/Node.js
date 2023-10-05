
const router = require('express').Router()

const Person = require('../models/Person')


// Create - criação de dados

router.post('/', async (req, res) => {

    //req.body
    const {text, category, isCompleted} = req.body

    if(!text) {
        res.status(422).json({ error: 'O nome da terafa é obrigatorio'})
    }

    const person = {
        text,
        category,
        isCompleted
    }

    // Create

    try {

        await Person.create(person)

        res.status(201).json({ message:'Tarefa inserida com sucesso!' })

    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Read - leitura de Dados
router.get('/', async (req, res) => {
    try {

        const people = await Person.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id',  async (req, res) =>{

    // Extrair o dado da requisição, pela url = req.params

    const id = req.params.id

    try{

        const person = await Person.findOne({ _id: id })

        if(!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Update - atualização de dados (PUT,PATCH)

router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { text, category, isCompleted } = req.body 

    const person = {
        text,
        category,
        isCompleted
    }

    try {

        const updatedPerson = await Person.updateOne({_id: id},person)

        if(updatedPerson.matchedCount === 0) {
            res.status(422).json({ message:'O usuário não foi encontrado'})
            return
        }

        res.status(200).json(person)

    } catch(error) {
        res.status(500).json({ error: error})
    }
})

// Delete - deletar dados
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({ _id: id })

    if (!person) {
        res.status(422).json({ message:'O usuario não foi encontrado!' })
        return
    }
    
    try {

        await Person.deleteOne({_id: id})

        res.status(200).json({ message: 'O usuário foi removido com sucesso!' })

    } catch(error) {
        res.status(500).json({ error: error })
    }
})
module.exports = router