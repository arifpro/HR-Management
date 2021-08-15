import express from 'express'
const router = express.Router()
import { getEmployees, addEmployee, addEmployees } from '../controllers/employeesControllers.js'

router.get('/all', getEmployees)
router.post('/add', addEmployee)
router.post('/adds', addEmployees)

export default router
