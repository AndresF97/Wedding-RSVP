const { Wedding } = require('../models')


const weddingData = [
    {
        name:'Waller Party',
        // guest_list:1,
        dish_id:1,
        user_id:1
    }
    ,{
        name:'Debua Party',
        // guest_list:2,
        dish_id:2,
        user_id:2
    },{
        name:'Flag Party',
        // guest_list:3,
        dish_id:3,
        user_id:3
    },{
        name:'Queen Party',
        // guest_list:4,
        dish_id:2,
        user_id:4
    },{
        name:'Kent Party',
        // guest_list:5,
        dish_id:2,
        user_id:5
    }
]

const seedWedding = () => Wedding.bulkCreate(weddingData);
module.exports = seedWedding;