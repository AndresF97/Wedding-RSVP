const User = require('./User')
const Wedding = require('./Wedding')
const Guest = require('./Guest')
const Dish = require('./Dish')
// Set up realtionship next
User.belongsTo(Wedding,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})
User.belongsTo(Guest,{
    foreignKey:'user_id',
})

Wedding.hasMany(User,{
    foreignKey:'user_id',
    onDelete:"CASACADE"
})
Wedding.hasMany(Guest,{
    foreignKey:'guest_list',
})

Guest.hasMany(Wedding,{
    foreignKey:'guest_list',
    onDelete:'CASCADE'
})
Guest.belongsTo(Wedding,{
    foreignKey:'wedding_event',
    onDelete:'CASCADE'
})
User.belongsTo(Guest,{
    foreignKey:'user_id',
    onDelete:"CASACADE"
})

// Dish.belongsTo(Wedding,{
//     foreignKey:'dish_id',
//     onDelete:"CASACADE"
// })

module.exports = {
    User, Wedding, Guest,
    Dish
}