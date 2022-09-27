const { Guest } = require('../models')

const userData = [
    {
        // Bruce Waynce
        rsvp: false,
        bring_kids: true,
        user_id:2,
        wedding_event:5
    }
    // ,{
    //     // Diana Prince
    //     rsvp: false,
    //     bring_kids: true,
    //     user_id:3,
    //     wedding_event:5
    // },{
    //     // Barry Allen
    //     rsvp: false,
    //     bring_kids: true,
    //     user_id:4,
    //     wedding_event:5
    // },{
    //     //  Bruce for Waller
    //     rsvp: false,
    //     bring_kids: true,
    //     user_id:2,
    //     wedding_event:1
    // },{
    //     // Diana Prince for Waller
    //     rsvp: false,
    //     bring_kids: true,
    //     user_id:3,
    //     wedding_event:2
    // },{
    //     // Barry Allen for Waller
    //     rsvp: false,
    //     bring_kids: true,
    //     user_id:4,
    //     wedding_event:2
    // }
    
]

const seedGuest = () => Guest.bulkCreate(userData, { individualHooks: true,
    returning: true,
})
module.exports = seedGuest