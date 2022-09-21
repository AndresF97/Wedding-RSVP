const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Wedding extends Models{}

Wedding.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                len:[2,10]
            }
        },
        dish_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'dish',
                key:'id'
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'user',
                key:'id'
            }
        }
    },{
        sequelize,
        timeStamp:false,
        freezeTableName:true,
        underscored:true,
        modelName:'wedding'
    }
)

module.exports = Wedding;