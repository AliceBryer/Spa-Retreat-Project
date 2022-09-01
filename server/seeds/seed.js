const db = require("../config/connection");
const {} = require("../models");

const spaData = require("./spa.json");

db.once("open", async () => {
  await Spa.deleteMany({});

  const treatments = await treatments.insertMany([
{
  name: 'Full Body Massage', 
  description: 'This medium pressure full body massage promises to melt away any hidden tension, applying the finest heated Elemis oils.', 
  price: '80',
  pictureurl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

}, 

{
  name: 'Head, Neck and Shoulders',
  description:'Deep Tissue Full Body Massage',
  price: '95',
  pictureurl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
},

{
  name: 'Feet Massage',
  description: 'Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.',
  price: '55',
  pictureurl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
  name: 'Deep tissue full body',
  description: 'Combat those aches and pains, with a deep tissue massage that can be tailored to focus on your specific areas of concern, ensuring your tired muscles get the TLC they truly deserve',
  price: '95',
  pictureurl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
  name: ' Pro- Collagen Age defying facial massage',
  description: 'Combining our most-loved Elemis treatments to create the ultimate two-hour experience. Your treatment will begin with a relaxing full body massage, designed to soothe both your muscles and mind, leading onto our Pro-Collagen facial, known for its clinically proven anti-wrinkle results. Leave Spa-Retreat not only feeling refreshed and rebalanced, but also with a firm, radiant and youthful looking complexion.',
  price: '160',
  pictureurl: 'https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
}, 
{
  name: 'Indian head massage',
  description: 'Total relaxation. This massage focuses on energy centres of the head, neck, scalp, and face by using key acupressure points to relieve tension and stress. Inclusive of a welcoming foot ritual. Please note this treatment is performed on a therapy chair.',
  price: '80',
  pictureurl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
}, 
{
  name: 'Deluxe Mani',
  description: 'A luxurious hand and nail treatment. Using the latest anti-ageing products, this treatment includes exfoliation and massage, followed by a nourishing mask and heated mitts. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.',
  price: '55',
  pictureurl: ''
}

  ]);

  console.log("Spa Data seeded!");
  process.exit(0);
});

