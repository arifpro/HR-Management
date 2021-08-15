import asyncHandler from "express-async-handler";
import database from "../configs/db.js";
const Employee = database.employees;

/**
 * @desc       get all employees
 * @param      {object}   req  - request
 * @param      {object}   res  - response
 * @route      GET /api/v1/employee/get-al
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-15
 */
const getEmployees = asyncHandler(async (req, res) => {
  Employee.findAll()
    .then((data) => {
      return res.status(200).send({
        status: true,
        message: "Successfully fetched employees",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        status: false,
        message: "Error while getting employees",
        error: err,
      });
    });
});

/**
 * @desc       add employees on mysql database
 * @param      {string}   req.body.firstName  - first name from request
 * @param      {string}   req.body.lastName  - last name from request
 * @param      {string}   req.body.email  - email from request
 * @param      {object}   res  - response
 * @route      POST /api/v1/employee/add
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-15
 */
const addEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Validate request
  if (!firstName) {
    return res.status(400).send({
      status: false,
      message: "First name is required",
    });
  } else if (!lastName) {
    return res.status(400).send({
      status: false,
      message: "Last name is required",
    });
  } else if (!email) {
    return res.status(400).send({
      status: false,
      message: "Email is required",
    });
  }

  Employee.findAll({ where: { email } })
    .then((data) => {
      if (data.length > 0) {
        return res.status(400).send({
          status: false,
          message: "Email already exists",
        });
      } else {
        // Save employee in the database if email is not already in the database
        Employee.create({ firstName, lastName, email })
          .then((data) => {
            return res.status(200).send({
              status: true,
              message: "Successfully added employee",
              data: data,
            });
          })
          .catch((err) => {
            return res.status(500).send({
              status: false,
              message: "Error while adding employee",
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding employee.",
      });
    });
});

// add employees array with multiple employee object
/**
 * @desc       add multiple employees on mysql database
 * @param      {object}   req.body.employees  - employees object from request
 * @param      {object}   res  - response
 * @route      POST /api/v1/employee/add-multiple
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-15
 */
const addEmployees = asyncHandler(async (req, res) => {
  const { employees } = req.body;

  // Validate request
  if (!Array.isArray(employees)) {
    return res.status(400).send({
      status: false,
      message: "Employees must be an array of some employee object",
    });
  } else if (employees.length > 0) {
    // Save employees array in the database
    Employee.bulkCreate(employees)
      .then((data) => {
        return res.status(200).send({
          status: true,
          message: "Successfully added employees",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          status: false,
          message: "Error while adding employees",
          error: err,
        });
      });
  } else {
    return res.status(400).send({
      status: false,
      message: "At least one employee object need on employees array",
    });
  }
});

export { getEmployees, addEmployee, addEmployees };
