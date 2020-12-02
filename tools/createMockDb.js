/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  members,
  migrations,
  migration_stages,
  migration_tasks,
  migration_types,
  operating_systems,
} = mockData;
const data = JSON.stringify({
  members,
  migrations,
  migration_stages,
  migration_tasks,
  migration_types,
  operating_systems,
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
