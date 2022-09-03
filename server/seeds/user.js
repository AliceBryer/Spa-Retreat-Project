const db = require("../config/connection");
const {} = require("../models");

const spaData = require("./spa.json");

db.once("open", async () => {
  await Spa.deleteMany({});

  const data = await Spa.insertMany(spaData);



const faciltiies = await facilities.insertMany([
    {
name: 'Hydrotherapy Pool',
description: 'Heal tired muscles whilst lowering your stress levels, in our blissful hydrotherapy pool. Swim under our massage jets, or unwind in our bubbling hot tub. ',
picture: 'https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    
        {
name: 'Saltwater Pool',
description: 'Promote the bodies automatic relaxtion in our mesmerising saltwater pool. Float amongst the crystal clear waters, discovering our starlit cave and poolside loungers.',
picture: 'https://images.unsplash.com/photo-1427097829427-56a905bf7004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsdHdhdGVyJTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    },
        {
name: 'Detox Centre',
description: 'Remove harmful toxins from the body by stimulating your circulatory system in our experience showers or tropical sauna.',
picture: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
        {
name: 'The Atrium',
description: 'Kick back in our open plan area and make the most of our detoxing juices and healthy meals and snacks.',
picture: 'https://images.unsplash.com/photo-1559625482-34b91d929ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
        {
name: 'Snooze Room',
description: 'Featuring atmospheric lighting and tranquil energy, the water beds are the ideal spots to truly switch off and unwind in silence.',
picture: 'https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
{
name:'Hair & Spa Boutique',
description:'Leave our spa looking your best as a great addition to you day ',
picture: 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80'.
},


]);

console.log('Facilities Seeded');

await User.create({
    username: 'pam1990',
    name: 'Pamela Smith',
    email: 'pamela@testmail.com',
    password: 'password12345',
 });
 
await User.create({
    username: 'bobby_trent01',
    name: 'Robert Trent',
    email: 'robert.trent@testmail.com',
    password: 'password12345',
 });
 await User.create({
    username: 'abbie231_x',
    name: 'Abigail Harvey',
    email: 'abih_123@testmail.com',
    password: 'password12345',
 });
 await User.create({
    username: 'hannah.g_1',
    name: 'Hannah Griffiths',
    email: 'hannahg@testmail.com',
    password: 'password12345',
 });
 await User.create({
    username: 'Wildman_1991',
    name: 'Gemma Wildman',
    email: 'wildgem@testmail.com',
    password: 'password12345',
 });

 
 console.log('users seeded');












  process.exit(0);
});








