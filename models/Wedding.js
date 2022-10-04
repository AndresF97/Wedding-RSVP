const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Wedding extends Model{}

Wedding.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                len:[2,10]
            }
        },
        // guest_list:{
        //     type:DataTypes.INTEGER,
        //     references:{
        //         model:'guest',
        //         key:'id'
        //     }
        // },
        dish_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'dish',
                key:'id'
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
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