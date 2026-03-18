# Frontend Developer Test - Sponsored Article Feed

This project is a Vue.js assessment built with **Vue 3, Quasar Framework, and Vite**. It showcases a production-ready approach to inserting "Sponsored Ads" into an article feed using mathematical calculations (mapping onto prime-numbered indices > 3) without introducing duplicated data.

## 🛠️ Architecture & Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **UI Library**: Quasar Framework (for fast & robust UI components)
- **State Management**: Pinia (Isolates logic algorithm and data transformation)
- **Component Explorer**: Histoire (Vue 3 Native alternative to Storybook)
- **Unit Testing**: Vitest + Vue Test Utils
- **E2E Testing**: Playwright
- **Deployment**: Docker
- **Code Quality**: ESLint + Prettier

---

## 🚀 How to Run the Application

### 1. Prerequisites

Ensure you have **Node.js** installed (Version 20+ is recommended, matching `engines` in `package.json`).

### 2. Installation

Run the following command at the root of the project to install all dependencies:

```bash
npm install
```

### 3. Start Development Server

Starts the local Quasar development server with Fast HMR:

```bash
npm run dev
```

> The application will be available at `http://localhost:9000`

---

## 🧪 Testing

### Unit Testing (Vitest)

Unit tests verify isolated components (stubbing UI libraries out), utilities (Prime numbers logic), and Pinia Stores.

```bash
npm run test:unit
```

> **Tip:** You can view test coverage by running `npm run test:unit:coverage`.

### End-to-End (E2E) Testing (Playwright)

The E2E tests will spin up a headless browser and check exact DOM outputs (verifying specific indexes mount the sponsored card successfully).

**Important Rule Before First Run**: You must install the Playwright browsers natively.

```bash
npx playwright install
```

**Running E2E:**

> Make sure the dev server (`npm run dev`) is currently running in a separate terminal before executing the E2E tests.

```bash
npm run test:e2e
```

---

## 🎨 Component Isolation (Story Histoire)

```bash
npm run story
```

> The visual workspace will be available at `http://localhost:6006`.

---

## 🐳 Docker Containerization

To run the application via a production-grade multi-stage Docker container (Nginx):

1. **Build the image**

```bash
docker build -t article-frontend .
```

2. **Run the container**

```bash
docker run -p 8080:80 article-frontend
```

> Access the production-optimized application in your browser at `http://localhost:8080`.
