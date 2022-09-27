const User = require('./User')
const Wedding = require('./Wedding')
const Guest = require('./Guest')
const Dish = require('./Dish')
// Set up realtionship next


// Wedding.belongsTo(User,{
//     foreignKey:'user_id',
//     onDelete:"CASACADE"
// })
// Wedding.hasMany(Guest,{
//     foreignKey:'guest_list',
//     onDelete:"CASACADE"
// })
User.belongsTo(Wedding,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})
User.belongsTo(Guest,{
    foreignKey:'user_id',
    onDelete:"CASACADE"
})
// Guest.belongsTo(Wedding,{
//     foreignKey:'guest_list',
//     onDelete:'CASCADE'
// })

// Guest.hasMany(User,{
//     foreignKey:'user_id',
//     onDelete:"CASACADE"
// })

// Dish.belongsTo(Wedding,{
//     foreignKey:'dish_id',
//     onDelete:"CASACADE"
// })

module.exports = {
    User, Wedding, Guest,
    Dish
}