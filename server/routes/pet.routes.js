const PetController = require('../controllers/pet.controller');
module.exports = (app) => {
    app.get('/api', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOnePet);
    app.post('/api/create', PetController.createPet);
    app.put('/api/edit/:id', PetController.editOnePet);
    app.delete('/api/delete/:id', PetController.deletePet);
}