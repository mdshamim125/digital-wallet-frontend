
---

# 💳 [Digital Wallet Management](https://digital-wallet-frontend-amber.vercel.app)

## 📌 Project Overview

The **Digital Wallet API** is a backend service designed to provide secure and scalable digital financial transactions. It enables users to manage their wallet balance, perform transactions (send/receive money, deposits, withdrawals), and access real-time financial data such as recent activities and analytics.

This project follows modern backend development practices with role-based authentication, error handling, and RESTful design principles.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization** (JWT-based, role-specific access)
- 💰 **Wallet Management** (check balance, add funds, withdraw, transfer)
- 📊 **Transaction History** (with pagination, filtering, and search)
- 📈 **Dashboard Overview** (stats, charts, and summaries)
- ⚡ **Secure API Endpoints** (protected with middleware & validations)

---

## Technology Stack

### Backend

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **Typescript** - Type validation
- **MongoDB + Mongoose** – Database
- **JWT (JSON Web Token)** – Authentication & Authorization
- **Bcrypt.js** – Password hashing

### Frontend (if applicable)

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
