import asyncHandler from "express-async-handler";
import { employees } from "./data/index.js";
import database from "./configs/db.js";
const Employee = database.employees;

// delete all employees
const down = asyncHandler(async (req, res) => {
  try {
    const destroy = await Employee.destroy({ where: {} });
    if (destroy) {
      console.log("All employees deleted successfully");
    } else {
      console.log("Something went wrong");
    }

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
});

// insert all employees
const up = async () => {
  try {
    await Employee.bulkCreate(employees);
    console.log("All employees inserted successfully");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv.includes("up")) {
  up();
} else if (process.argv.includes("down")) {
  down();
}
