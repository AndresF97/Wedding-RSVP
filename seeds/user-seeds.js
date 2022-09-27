const { User } = require('../models')

const userData = [
    {
        name: 'Amanda Waller',
        email:'amanda@gmail.com',
        password:'password1234',
        is_guest:false
    },{
        name:'Bruce Wanye',
        email:'bruce@batman.com',
        password:'password1234',
        is_guest:true
    },{
        name:'Dian Prince',
        email:'Diana@gmail.com',
        password:'password1234',
        is_guest:true
    },{
        name:'Barry Allen',
        email:'Barry@hgmail.com',
        password:'password1234',
        is_guest:false
    },{
        name:'brigss',
        email:'brigss@gmail.com',
        password:'password1234',
        is_guest:true
    },{
        name:'Rick Flag',
        email:'rick@gmail.com',
        password:'password1234',
        is_guest:true
    },{
        name:'Harley Quenn',
        email:'harley@gmail.com',
        password:'password1234',
        is_guest:false
    },{
        name:'Clark Kent',
        email:'kent@gmail.com',
        password:'password1234',
        is_guest:false
    }
]

const seedUser = () => User.bulkCreate(userData,
    { individualHooks: true,
    returning: true,
});
module.exports =  seedUser;