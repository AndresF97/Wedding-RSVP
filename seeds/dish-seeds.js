const { Dish } = require('../models')

const dishData = [
    {
        name:'Burges and Fries'
    },
    {
        name:'Pizza'
    },
    {
        name:'Hot dogs'
    },
    {
        name:'Burges and Fries'
    }
]

const seedDish = ()=> Dish.bulkCreate(dishData,   { individualHooks: true,
    returning: true,
});

module.exports = seedDish;