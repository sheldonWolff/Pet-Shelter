const Pet = require('../models/pet.model');

module.exports = {

    createPet: (req, res) => {
        Pet.create(req.body)
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err))
    },
    getAllPets: (req, res) => {
        Pet.find({})
            .then(allPets => res.json(allPets))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    getOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then(onePet => res.json(onePet))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    editOnePet: (req, res) => {
        Pet.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedPet => res.json(updatedPet))
            .catch(err => res.status(400).json(err));
    },
    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }

}