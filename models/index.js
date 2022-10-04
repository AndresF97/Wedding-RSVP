const User = require('./User')
const Wedding = require('./Wedding')
const Guest = require('./Guest')
const Dish = require('./Dish')
// Set up realtionship next
Wedding.belongsTo(User,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})


Wedding.hasMany(User,{
    foreignKey:'user_id',
    onDelete:"CASACADE"
})

Wedding.hasMany(Guest,{
    foreignKey:'wedding_id',
    onDelete:'CASCADE'
})

Dish.belongsTo(Wedding,{
    foreignKey:'dish_id',
    onDelete:"CASACADE"
})

module.exports = {
    User, Wedding, Guest,
    Dish
}