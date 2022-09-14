const db = require("../config/connection");
const { Facilities, Treatments, User } = require("../models");

db.once("open", async () => {
  // Treatment seed data

  await Treatments.deleteMany();

  const treatments = await Treatments.insertMany([
    {
      name: "Full Body Massage",
      description:
        "This medium pressure full body massage promises to melt away any hidden tension, applying the finest heated Elemis oils.",
      price: 80,
      pictureURL:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Head, Neck and Shoulders",
      description: "Deep Tissue Full Body Massage",
      price: 95,
      pictureURL:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Feet Massage",
      description:
        "Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
      price: 55,
      pictureURL:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Deep tissue full body",
      description:
        "Combat those aches and pains, with a deep tissue massage that can be tailored to focus on your specific areas of concern, ensuring your tired muscles get the TLC they truly deserve",
      price: 95,
      pictureURL:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: " Pro- Collagen Age defying facial massage",
      description:
        "Combining our most-loved Elemis treatments to create the ultimate two-hour experience. Your treatment will begin with a relaxing full body massage, designed to soothe both your muscles and mind, leading onto our Pro-Collagen facial, known for its clinically proven anti-wrinkle results. Leave Spa-Retreat not only feeling refreshed and rebalanced, but also with a firm, radiant and youthful looking complexion.",
      price: 160,
      pictureURL:
        "https://images.unsplash.com/photo-1603274737277-f43f54446c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYWNpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Indian head massage",
      description:
        "Total relaxation. This massage focuses on energy centres of the head, neck, scalp, and face by using key acupressure points to relieve tension and stress. Inclusive of a welcoming foot ritual. Please note this treatment is performed on a therapy chair.",
      price: 80,
      pictureURL:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMG1hc3NhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Deluxe Manicure",
      description:
        "A luxurious hand and nail treatment. Using the latest anti-ageing products, this treatment includes exfoliation and massage, followed by a nourishing mask and heated mitts. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
      price: 55,
      pictureURL:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    {
      name: "Deluxe Pedicure",
      description:
        "Hot to trot. Focusing on the foot and lower leg, this treatment includes exfoliation and a warm foot bath, followed by a tension relieving massage and work on your cuticles. Nails are then filed, shaped and painted in the colour of your choice, with you being able to take home the midi colour as our little treat.",
      price: 55,
      pictureURL:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVkaWN1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Cut and blowdry",
      description:
        "Put a little bounce in your barnet with a nourishing blow-dry treatment.",
      price: 34,
      pictureURL:
        "https://images.unsplash.com/photo-1620331317312-74b88bf40907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMGRyeWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Balayage",
      description:
        "Balayage allows for a sun-kissed, natural looking hair colour, with softer, less noticeable re-growth.",
      price: 84,
      pictureURL:
        "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Express styling",
      description:
        "Styling primer is applied to towel-dried hair before your regular styling products.",
      price: 17,
      pictureURL:
        "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Couples relaxing full body massage ",
      description:
        "Share a relaxing and memorable occasion providing you an opportunitiy for connecting and bonding with your loved one in a wonderful way.",
      price: 100,
      pictureURL:
        "https://media.istockphoto.com/photos/couple-massage-at-spa-resort-beautiful-couple-getting-a-back-massage-picture-id1336348648?k=20&m=1336348648&s=612x612&w=0&h=aLzVuCJQMnA3zMxl-PBirqJkJykZLCDhZNMvXq9aq5g=",
    },
    // {
    //   name: "Couples pro-radiance facial",
    //   description:
    //     "This facial will rejuvenate your skin. It will energise & detoxify a stressed, dull skin with a nutritional superfood boost",
    //   price: 100,
    //   pictureURL:
    //     "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    // },
  ]);

  console.log("Spa Data seeded!");

  // Facilities seed data

  await Facilities.deleteMany();

  const faciltiies = await Facilities.insertMany([
    {
      name: "Snooze Room",
      description:
        "Featuring atmospheric lighting and tranquil energy, the water beds are the ideal spots to truly switch off and unwind in silence.",
      pictureURL:
        "https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Hair & Spa Boutique",
      description:
        "Leave our spa looking your best as a great addition to your day ",
      pictureURL:
        "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80",
    },
    {
      name: "Hydrotherapy Pool",
      description:
        "Heal tired muscles whilst lowering your stress levels, in our blissful hydrotherapy pool. Swim under our massage jets, or unwind in our bubbling hot tub. ",
      pictureURL:
        "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },

    {
      name: "Saltwater Pool",
      description:
        "Promote the bodies automatic relaxtion in our mesmerising saltwater pool. Float amongst the crystal clear waters, discovering our starlit cave and poolside loungers.",
      pictureURL:
        "https://images.unsplash.com/photo-1427097829427-56a905bf7004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsdHdhdGVyJTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Detox Centre",
      description:
        "Remove harmful toxins from the body by stimulating your circulatory system in our experience showers or tropical sauna.",
      pictureURL:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "The Atrium",
      description:
        "Kick back in our open plan area and make the most of our detoxing juices and healthy meals and snacks.",
      pictureURL:
        "https://images.unsplash.com/photo-1559625482-34b91d929ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ]);

  console.log("Facilities Seeded");

  // User seed data

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Smith",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Robert",
    lastName: "Trent",
    email: "robert.trent@testmail.com",
    password: "password12345",
    profilePic:
      "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
  });
  await User.create({
    firstName: "Abigail",
    lastName: "Harvey",
    email: "abih_123@testmail.com",
    password: "password12345",
    profilePic:
      "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
  });
  await User.create({
    firstName: "Hannah",
    lastName: "Griffiths",
    email: "hannahg@testmail.com",
    password: "password12345",
    profilePic:
      "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
  });
  await User.create({
    firstName: "Gemma",
    lastName: "Wildman",
    email: "wildgem@testmail.com",
    password: "password12345",
    profilePic:
      "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
  });

  console.log("users seeded");

  process.exit(0);
});
