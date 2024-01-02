const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.get('/getExpenses', expenseController.getExpenses);

router.post('/addExpense', expenseController.postExpense);

router.get('/editExpense/:id', expenseController.getEditExpense);

router.post('/deleteExpense/:id', expenseController.postDeleteExpense);

module.exports = router;