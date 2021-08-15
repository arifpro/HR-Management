import asyncHandler from 'express-async-handler'
import {mysqlConnection} from '../configs/db.js';

/**
 * @desc       get all employees
 * @param      {object}   req  - request
 * @param      {object}   res  - response
 * @route      GET /api/v1/employees/get
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-15
 */
 const getEmployees = asyncHandler(async (req, res) => {
  mysqlConnection.query(`SELECT * FROM employees`, (err, rows) => {
    if (err) {
      return res.status(500).send({
        status: false,
        message: 'Error while getting employees',
        error: err
      })
    }
    return res.status(200).send({
      status: true,
      message: 'Successfully fetched employees',
      data: rows
    })
  })
})


/**
 * @desc       add employees on mysql database
 * @param      {string}   req.body.firstName  - first name from request
 * @param      {string}   req.body.lastName  - last name from request
 * @param      {string}   req.body.email  - email from request
 * @param      {object}   res  - response
 * @route      POST /api/v1/employees/add
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-15
 */
const addEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email } = req.body

  mysqlConnection.query(`INSERT INTO employees (first_name, last_name, email) VALUES ('${firstName}', '${lastName}', '${email}')`, (err, rows) => {
    if (err) {
      return res.status(500).send({
        status: false,
        message: 'Error while adding employee',
        error: err
      })
    }
    return res.status(200).send({
      status: true,
      message: 'Successfully added employee',
      data: rows
    })
  })

  // mysqlConnection.end()
})


const addEmployees = asyncHandler(async (req, res) => {})

export { getEmployees, addEmployee, addEmployees }
