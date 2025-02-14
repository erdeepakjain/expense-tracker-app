# Expense Tracker App

A beautiful and intuitive expense tracking application built with React and TypeScript. Track your daily expenses, categorize them, and visualize your spending patterns with interactive charts.

![Expense Tracker Screenshot](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80)

## Features

- 💰 Track expenses with amount, category, description, and date
- 📊 Visualize spending patterns with interactive pie charts
- 📱 Responsive design that works on desktop and mobile
- 🏷️ Categorize expenses (Food & Dining, Transportation, Shopping, etc.)
- 💾 Persistent storage using browser's localStorage
- 📅 Date-based expense tracking
- 💫 Beautiful and intuitive user interface

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Lucide React for icons
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/expense-tracker-app.git
cd expense-tracker-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Usage

1. **Adding Expenses**
   - Click the "Add New Expense" form
   - Enter the amount, category, description, and date
   - Click "Add Expense" to save

2. **Viewing Expenses**
   - All expenses are listed in a table format
   - View total expenses at the top of the page
   - Analyze spending patterns through the pie chart

3. **Deleting Expenses**
   - Click the trash icon next to any expense to delete it
   - The total and charts will automatically update

## Data Storage

The application uses the browser's localStorage to persist expense data. This means:
- Data remains available even after browser refresh
- No backend server required
- Data is stored locally on the user's device
- Each browser/device maintains its own separate data store

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- Charts powered by [Recharts](https://recharts.org)
- Styling with [Tailwind CSS](https://tailwindcss.com)