const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Guest extends Models{}


Guest.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        RSVP:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        bring_kids:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        wedding_event:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'wedding',
                key:'id'
            }
        }
    },{
        sequelize,
        timestaps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'guest'
    }
)

module.exports = Guest;