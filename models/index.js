const User = require('./User')
const Wedding = require('./Wedding')
const Guest = require('./Guest')
const Dish = require('./Dish')
// Set up realtionship next


Wedding.belongsTo(User,{
    foreign_key:'user_id',
    onDelete:"CASACADE"
})

Guest.belongsTo(Wedding,{
    foreign_key:'guest_list',
    onDelete:'CASCADE'
})
Wedding.hasMany(Guest,{
    foreign_key:'guest_list'
})
Dish.belongsTo(Wedding,{
    foreign_key:'dish_id'
})

module.exports = {
    User, Wedding, Guest,
    Dish
}