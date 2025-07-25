# 🔐 Secure Messaging App

A full-stack secure messaging backend built with:

- **TypeScript**
- **Express.js**
- **Sequelize + PostgreSQL**
- **Socket.IO**
- **Swagger for API docs**
- **Docker & Docker Compose** support

## 📦 Features

- User authentication
- Group creation & messaging
- Message editing with logging
- File uploads (file URLs)
- Real-time messaging with Socket.IO
- API documentation via Swagger

---

## ⚙️ Tech Stack

| Layer            | Technology           |
|------------------|----------------------|
| Server           | Node.js + Express    |
| Language         | TypeScript           |
| ORM              | Sequelize            |
| Database         | PostgreSQL           |
| Real-time        | Socket.IO            |
| API Docs         | Swagger (OpenAPI)    |
| Containerization | Docker, Docker Compose|

---

## 🚀 Getting Started

### 📁 Project Structure

secure-messaging-app/
├── src/
│ ├── config/ # DB, Swagger setup
│ ├── controllers/ # API logic
│ ├── models/ # Sequelize models
│ ├── routes/ # Express routers
│ ├── services/ # Business logic
│ ├── sockets/ # Socket.IO handlers
│ └── server.ts # App entry point
├── .env # Environment variables
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── README.md

