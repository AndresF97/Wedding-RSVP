const { Guest } = require('../models')

const guestData = [
    {
        // Bruce Waynce
        rsvp: false,
        bring_kids: true,
        // wedding_id:5,
        user_id:2
    }
    ,{
        // Diana Prince
        rsvp: false,
        bring_kids: true,
        user_id:3,
        // wedding_id:5
    },
    {
        // Barry Allen
        rsvp: false,
        bring_kids: true,
        user_id:4,
        // wedding_id:5
    },
    {
        //  Bruce for Waller
        rsvp: false,
        bring_kids: true,
        user_id:2,
        // wedding_id:1
    },
    {
        // Diana Prince for Waller
        rsvp: false,
        bring_kids: true,
        user_id:3,
        //wedding_id:2
    },
    {
        // Barry Allen for Waller
        rsvp: false,
        bring_kids: true,
        user_id:4,
        // wedding_id:2
    }
    
]

const seedGuest = () => Guest.bulkCreate(guestData)
module.exports = seedGuest