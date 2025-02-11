const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    itemsArr:{
        type: [String],
        required: true,
    },
});

const itemDetails = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
})

const restaturant = mongoose.model('restaurant',restaurantSchema);

const items = mongoose.model('items', itemDetails);

module.exports = {restaturant,items};



 


















