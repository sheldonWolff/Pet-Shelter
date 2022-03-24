const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [
            3,
            'Name must be at least 3 characters!'
        ],
        unique: [
            true
        ],
        required: [
            true,
            "Name is required!"
        ]
    },
    type: {
        type: String,
        minlength: [
            3,
            'Type must be at least 3 characters!'
        ],
        required: [
            true,
            "Type is required!"
        ]
    },
    description: {
        type: String,
        minlength: [
            2,
            'Description must be at least 3 characters!'
        ],
        required: [
            true,
            "Description is required!"
        ]
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    }
}, { timestamps: true });
PetSchema.plugin(uniqueValidator, {message: 'Pet already exists!'});
module.exports = mongoose.model('Pet', PetSchema);