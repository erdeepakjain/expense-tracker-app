import React, { useEffect, useState } from 'react';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseChart } from './components/ExpenseChart';
import { Wallet } from 'lucide-react';
import type { Expense, ExpenseFormData } from './types/expense';
import { getExpenses, addExpense, deleteExpense } from './lib/storage';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    fetchExpenses();
  }, []);

  useEffect(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpenses(total);
  }, [expenses]);

  const fetchExpenses = () => {
    const storedExpenses = getExpenses();
    setExpenses(storedExpenses);
  };

  const handleAddExpense = async (expenseData: ExpenseFormData) => {
    addExpense(expenseData);
    fetchExpenses();
  };

  const handleDeleteExpense = async (id: string) => {
    deleteExpense(id);
    fetchExpenses();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Expense Tracker</h1>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="text-sm text-gray-500">Total Expenses</span>
            <p className="text-2xl font-bold text-blue-600">${totalExpenses.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
          </div>
          <div className="space-y-8">
            <ExpenseForm onSubmit={handleAddExpense} />
            <ExpenseChart expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;