const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Guest extends Model{}


Guest.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        rsvp:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        bring_kids:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        wedding_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'wedding',
              key: 'id',
            },
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
        timestaps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'guest'
    }
)

module.exports = Guest;