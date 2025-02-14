import type { Expense, ExpenseFormData } from '../types/expense';

const STORAGE_KEY = 'expenses';

export function getExpenses(): Expense[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addExpense(expenseData: ExpenseFormData): Expense {
  const expenses = getExpenses();
  const newExpense: Expense = {
    ...expenseData,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString()
  };
  
  expenses.push(newExpense);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  return newExpense;
}

export function deleteExpense(id: string): void {
  const expenses = getExpenses();
  const filtered = expenses.filter(expense => expense.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}