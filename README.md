# 🤖 Human-in-the-Loop Email Agent

A simple web application that demonstrates a **Human-in-the-Loop workflow**.

The agent can autonomously process a user's request and prepare an email, but it **pauses and requires explicit human approval before taking the sensitive action of sending it**.

This project was created as part of an **MLH Challenge**.

## 🎯 Challenge

**Build a Human-in-the-Loop Workflow**

The goal was to design an agent that can operate autonomously while requiring a human to approve sensitive actions.

## 🔄 How It Works

```text
User Request
     ↓
🤖 Agent Processes Request
     ↓
📧 Email Is Prepared
     ↓
⚠️ Human Approval Required
     ↓
   ┌───────────────┐
   │               │
Approve          Reject
   │               │
   ↓               ↓
Send            Cancel
```

The agent **cannot complete the sensitive action without human approval**.

## ✨ Features

* 🤖 Autonomous request processing
* 📧 Automatic email generation
* ⚠️ Human approval checkpoint
* ✅ Approve and send
* ❌ Reject and cancel
* 📱 Responsive design
* 🖥️ Simple and easy-to-use interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 🧠 Human-in-the-Loop Concept

The most important part of this project is the approval checkpoint.

After the agent prepares an email, it stops and displays:

> ⚠️ Human Approval Required

The user must explicitly choose **Approve & Send** or **Reject**.

The agent cannot proceed automatically.

This demonstrates how human oversight can be used to prevent an autonomous system from performing sensitive actions without permission.

## 🧪 Example

A user enters:

```text
Send an email to my teacher asking for a 3-day assignment extension.
```

The agent prepares an email and then pauses.

The user can:

**Approve & Send**

or

**Reject**

If the user rejects the action, the email is not sent.

## 📁 Project Structure

```text
human-in-the-loop-agent/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

1. Clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html`.
4. Use **Live Server** or open the HTML file directly in a browser.
5. Enter a request and click **Generate Email**.
6. Test both the **Approve** and **Reject** workflows.

## ⚠️ Note

This project simulates the email-sending action for demonstration purposes. It does **not actually send emails**.

The purpose is to demonstrate the Human-in-the-Loop approval workflow safely.

## 📚 What I Learned

Through this project, I learned:

* How Human-in-the-Loop systems work
* How to create an approval checkpoint
* How to pause an automated workflow
* How to handle approve/reject decisions with JavaScript
* How to design a simple agent workflow
* Why human oversight is important when autonomous systems perform sensitive actions

## 🏆 MLH Challenge

Built for the **MLH "Build a Human-in-the-Loop Workflow" challenge**.

The project demonstrates an autonomous workflow that requires **explicit human approval before performing a sensitive action**.

---

Built with HTML, CSS & JavaScript 🤖
