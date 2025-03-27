# Tech Quiz App – Cypress Testing Integration

## 📋 Overview

This project enhances a fully functional **Tech Quiz** web application by integrating comprehensive **Cypress** testing. The goal is to ensure reliability and robustness through both **component** and **end-to-end (E2E)** tests.

The Tech Quiz app is built using the **MERN stack**, featuring:
- **MongoDB** for data storage
- **Express.js** and **Node.js** for the backend API
- **React** for the frontend

Users can take a quiz with **10 random tech-related questions** and view their **final score** upon completion.

---

## 🧪 Project Enhancements

This project focuses on improving test coverage using **Cypress**, a powerful JavaScript testing framework.

### ✅ Key Tasks Completed:
- Cypress installed and configured as a dev dependency
- Cypress set up for both **component** and **end-to-end** testing
- A **component test** created for the `Quiz` component
- An **end-to-end test** simulating the full quiz experience

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tech-quiz.git
cd tech-quiz
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Cypress
```bash
npm install cypress --save-dev
```

---

## ⚙️ Cypress Configuration

Cypress has been configured for:

### 🔹 Component Testing
Cypress can directly test React components for rendering and logic behavior.

### 🔹 End-to-End Testing
Cypress simulates a real user journey through the app, from starting the quiz to submitting answers and viewing the score.

To open the Cypress test runner:
```bash
npx cypress open
```

Use the Cypress GUI to choose between component or E2E tests.

---

## 🧩 Available Scripts

### Start the App
```bash
npm start
```

### Run Backend Server (if separate)
```bash
npm run server
```

### Run Cypress Tests
```bash
npx cypress open
```

---

## 🧠 Component Tested

**`<Quiz />`**
- Ensures correct rendering of questions
- Handles answer selection
- Updates and displays score appropriately

---

## 🌐 End-to-End Test

Simulates the full quiz-taking process:
1. User starts the quiz
2. Selects answers
3. Submits quiz
4. Views final score

---

## 📂 Project Structure (Partial)

```
tech-quiz/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Quiz.js
│   │   └── ...
├── server/
│   └── ...
├── cypress/
│   ├── e2e/
│   └── component/
└── ...
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Tate Sutter  
Lawrence, KS  
[GitHub](https://github.com/your-username)
