export type Expense = {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  created_at: string;
};

export type ExpenseFormData = Omit<Expense, 'id' | 'created_at'>;