# Japanese Delivery App 🚀

A modern fullstack web application built with React (Vite + TypeScript) on the frontend and Node.js on the backend.

---
## ✨ Description

This project is a web application that provides management for a Japanese delivery restaurant, from receiving an order to organizing the available dishes on the menu.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

> **Note:** The application currently uses mock data for demonstration purposes while the backend is under development.

---
## 📋 Table of Contents
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Live Demo](#-live-demo)
- [Project Status](#-project-status)
---
## 🎯 Features
-   **Type Safety**: Full TypeScript support for better code quality and developer experience.
-   **Form Management**: React Hook Form with Zod validation for robust form handling.
-   **Data Fetching**: TanStack Query (React Query) for efficient server state management.
-   **Styling**: Tailwind CSS 4 for rapid UI development.
-   **Routing**: React Router 7 for navigation.
-   **RESTful API**: Node.js backend with clean API architecture.
-   ⚠️ **Work in Progress**: Some pages and features are still under development.
---
## 🛠️ Technologies Used
-   **Frontend**:
    -   React **19**
    -   TypeScript **5**
    -   Vite **7**
    -   Tailwind CSS **4**
    -   React Hook Form **7**
    -   Zod **4**
    -   TanStack Query **5**
    -   React Router **7**
    -   Heroicons **2**
-   **Backend**:
    -   Node.js
    -   Express
- **Database**:
    - PostgreSQL
-   **Build Tool**:
    -   Vite
    -   pnpm
---
## ✅ Prerequisites

### For Development:
-   **Node.js** 18+ or later
-   **pnpm** (recommended package manager)

---
## 🚀 Getting Started

### 🔧 Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/mattcalb/japanese-delivery-app.git
    cd japanese-delivery-app
    ```

2.  **Install pnpm** (if not already installed)
    ```sh
    npm install -g pnpm
    ```

3.  **Install dependencies**
    
    **Frontend:**
    ```sh
    cd frontend
    pnpm install
    ```
    
4.  **Run the application**
    
    **Frontend (development mode):**
    ```sh
    cd frontend
    pnpm dev
    ```
    The frontend will be available at `http://localhost:5173` (default Vite port)

5.  **Build for production**
    ```sh
    cd frontend
    pnpm build
    ```

6.  **Preview production build**
    ```sh
    cd frontend
    pnpm preview
    ```

## 🌐 Live Demo
The frontend is deployed on Vercel for preview and demonstration purposes.
Check out the live demo: **[View Live Site](https://japanese-delivery-app-frontend-lt1xasrq0.vercel.app/)**

---
## 🚧 Project Status

**Current Status**: In Development

✅ **Completed:**
- Frontend base structure with React 19 + Vite
- Initial form validation with React Hook Form + Zod
- Initial routing configuration with React Router 7

🔄 **In Progress:**
- Additional pages
- Backend API setup
- Full API integration
- Dockerize the application
---
## 📝 License
This project is open source and available under the [MIT License](LICENSE).


