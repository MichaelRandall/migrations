/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  courses,
  authors,
  members,
  migrations,
  migration_stages,
  migration_tasks,
  migration_types,
} = mockData;
const data = JSON.stringify({
  courses,
  authors,
  members,
  migrations,
  migration_stages,
  migration_tasks,
  migration_types,
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
