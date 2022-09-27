const { Guest } = require('../models')

const userData = [
    {
        // Bruce Waynce
        RSVP: false,
        bring_kids: true,
        user_id:2,
        wedding_event:5
    },{
        // Diana Prince
        RSVP: false,
        bring_kids: true,
        user_id:3,
        wedding_event:5
    },{
        // Barry Allen
        RSVP: false,
        bring_kids: true,
        user_id:4,
        wedding_event:5
    },{
        //  Bruce for Waller
        RSVP: false,
        bring_kids: true,
        user_id:2,
        wedding_event:1
    },{
        // Diana Prince for Waller
        RSVP: false,
        bring_kids: true,
        user_id:3,
        wedding_event:2
    },{
        // Barry Allen for Waller
        RSVP: false,
        bring_kids: true,
        user_id:4,
        wedding_event:2
    }
    
]

const seedGuest = () => Guest.bulkCreate(userData)
module.exports = seedGuest