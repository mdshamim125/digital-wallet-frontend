---
# 💳 [Digital Wallet Management](https://digital-wallet-frontend-amber.vercel.app)

## 📌 Project Overview

The **Digital Wallet API** Management is a  service designed to provide secure and scalable digital financial transactions. It enables users to manage their wallet balance, perform transactions (send/receive money, deposits, withdrawals), and access real-time financial data such as recent activities and analytics.

This project follows modern frontend and backend development practices with role-based authentication, error handling, folder structures and RESTful design principles.
---

## 🚀 Features

- 🔐 **Authentication & Authorization**

  - JWT-based login & registration
  - Role-based access control (User, Agent, Admin)
  - Persisted auth state & secure logout

- 💰 **Wallet Management**

  - Check wallet balance
  - Deposit & withdraw money
  - Transfer funds to other users (by phone/email)

- 📊 **Transaction History**

  - Paginated transaction list
  - Advanced filtering (type, date, amount)
  - Search functionality

- 📈 **Dashboards**

  - Role-based dashboards (User, Agent, Admin)
  - Overview cards with key metrics
  - Dynamic charts & visualizations
  - Recent activity summaries

- ⚡ **Admin Features**

  - Manage users & agents (approve, block, suspend)
  - Monitor all transactions with filters
  - System settings (fees/limits management)

- 🛠 **General Features**
  - Role-based navigation menus
  - Responsive, mobile-first design
  - Form validations with error handling
  - Toast notifications for quick feedback
  - Guided tour (interactive onboarding)
  - Dark/Light theme toggle

---

## Technology Stack

### Backend

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **Typescript** - Type validation
- **MongoDB + Mongoose** – Database
- **JWT (JSON Web Token)** – Authentication & Authorization
- **Bcrypt.js** – Password hashing

### Frontend

- **React.js + Typescript + Redux + RTK Query** – Frontend framework
- **Tailwind CSS** – Styling
- **Axios / React Query** – Data fetching
- **Vercel** – Hosting
- **react-joyride** - Guided Tour

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mdshamim125/digital-wallet-frontend
cd digital-wallet-frontend
```

### 2️⃣ Install Dependencies

```bash
bun install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory and add the following:

```
# VITE_BASE_URL=http://localhost:5000/api/v1

VITE_BASE_URL=https://digital-wallet-backend-lyart.vercel.app/api/v1
```

### 4️⃣ Run the Server

```bash
bun dev

```

---

## 🌍 Live URL

🔗 **Frontend**: [https://digital-wallet-frontend-amber.vercel.app](https://digital-wallet-frontend-amber.vercel.app)

---
