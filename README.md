# 🏛️ Bank Management System

A simple, responsive, and functional **Bank Management System** web application built using **React, Vite, and React Router DOM**.

This project allows users to manage their bank accounts, check real-time balances, deposit and withdraw funds safely with proper validations, and view transaction history with persistent storage.

---

## 🚀 Features

- **Dashboard**: Displays bank name, account holder details, account number, current balance, total deposits, and total withdrawals.
- **Deposit Money**: Easy-to-use form to deposit funds into the account with instant updates.
- **Withdraw Money**: Secure withdrawal form with balance checks to prevent overdrawing and confirmation dialogs.
- **Transaction History**: Displays a complete log of past transactions (Deposits & Withdrawals) with styled badges and timestamps.
- **Form Validations**: Prevents negative, zero, or empty transaction amounts with clear feedback messages.
- **Responsive UI**: Dark-themed modern layout built using CSS Flexbox & Grid for smooth viewing on Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: React (Functional Components, Hooks)
- **Build Tool**: Vite
- **Routing**: React Router DOM (`BrowserRouter`, `Routes`, `Route`, `NavLink`)
- **State Management**: React Context API (`createContext`, `useContext`)
- **Styling**: Pure CSS (Responsive Layout)

---

## ⚙️ Installation & Setup Process

### Step 1: Clone the repository
git clone [https://github.com/FahmidaMitu/bank-management.git](https://github.com/FahmidaMitu/bank-management.git)

### Step 2: Navigate into the project directory
cd bank-management

# Step 3: Install all project dependencies
npm install

# Step 4: Install React Router DOM for navigation
npm install react-router-dom

# Step 5: Start the local Vite development server
npm run dev

# Step 6: Open the application in your browser
# Visit http://localhost:5173

---

## 📁 Project Folder Structure

```text
bank-management/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BalanceCard.jsx
│   │   └── TransactionItem.jsx
│   ├── context/
│   │   └── BankContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Deposit.jsx
│   │   ├── Withdraw.jsx
│   │   └── Transactions.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md