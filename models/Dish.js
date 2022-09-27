const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Dish extends Model{}

Dish.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[2,10]
            }
        },
        has_nuts:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'dish'
    }
)


module.exports = Dish;