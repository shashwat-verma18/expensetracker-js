const Expense = require('../models/expenseModel');

exports.getExpenses = (req, res, next) => {
    Expense.findAll()
        .then(expenses => {
            res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.postExpense = (req, res, next) => {
    const amount = req.body.amount;
    const des = req.body.des;
    const cat = req.body.cat;

    Expense
        .create({
            amount: amount,
            description: des,
            category: cat,
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
};


exports.getEditExpense = (req, res, next) => {

    const id = req.params.id;

    Expense.findByPk(id)
        .then(expense => {
            res.json(expense.dataValues);
        })
        .catch(err => console.log(err));
};

exports.postDeleteExpense = (req, res, next) => {

    const id = req.params.id;

    Expense.findByPk(id)
        .then(expense => {
            expense.destroy();
            res.json(expense);
        })
        .catch(err => console.log(err));

}

