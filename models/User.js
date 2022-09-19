const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection')

class User extends Model{
    checkPassword(loginPwd){
        return bcrypt.compareSync(loginPwd, this.password)
    }
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        is_guest:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
        }
    },{
        hooks:{
            beforeCreate: async (newUserData)=>{
                newUserData.password = await bcrypt.hash(newUserData.password,10)
                return newUserData
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'User'
    }
);

module.exports = User;