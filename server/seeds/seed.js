const db = require("../config/connection");
const {} = require("../models");

const spaData = require("./spa.json");

db.once("open", async () => {
  await Spa.deleteMany({});

  const data = await Spa.insertMany(spaData);

  console.log("Spa Data seeded!");
  process.exit(0);
});
