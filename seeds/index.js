const guestSeed = require('./guest-seeds')
const dishSeed = require('./dish-seeds')
const userSeed = require('./user-seeds')
const weddingSeed = require('./wedding-seeds')
const sequelize = require('../config/connection')

const seedAll = async() =>{
    await sequelize.sync({force:true});
    // console.log('\n----- DATABASE SYNCED -----\n');
    // await guestSeed();
    // console.log('\n----- GUEST SEEDED -----\n');
    // await dishSeed()
    // console.log('\n----- DISH SEEDED -----\n');
    await userSeed();
    console.log('\n----- USER SEEDED -----\n');
    // await weddingSeed();
    // console.log('\n----- WEEDING SEEDED -----\n');
    process.exit(0);
}

seedAll()