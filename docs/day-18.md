# Day 18 — Performance, Docker Containerization & CI/CD Pipelines

## Learning Objectives
* Optimize MongoDB database queries using compound indexes and field projections.
* Implement React code-splitting (`React.lazy`, `<Suspense>`) and memoization (`useMemo`, `useCallback`).
* Containerize backend applications using Docker (`Dockerfile`, `.dockerignore`).
* Create automated GitHub Actions CI/CD workflow pipelines (`.github/workflows/ci.yml`).

## What We Learn
Today we conclude our course by taking our application to enterprise production readiness. We learn how database indexes accelerate query speeds, how React code-splitting reduces bundle sizes, how Docker packages Node services into reproducible containers, and how GitHub Actions automates testing and deployment pipelines.

## Why We Learn It
Building features is only half the job. Ensuring scalable performance under high traffic, reproducible container deployments, and automated testing pipelines guarantees application reliability in production.

## Important Concepts
* **Database Indexing:** B-Tree data structures accelerating document lookup speeds from `O(N)` to `O(log N)`.
* **Docker Container:** Lightweight, standalone executable package containing application code, runtime, and dependencies.
* **CI/CD Pipeline:** Automated workflow executing build scripts, linters, and test suites automatically on every Git commit push.

## Project Files
* [`docs/day-18.md`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/docs/day-18.md)
* [`.github/workflows/ci.yml`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/.github/workflows/ci.yml)
* [`backend/Dockerfile`](file:///d:/My_Projects/College_Project/Elective/MERN_Project_Elective/backend/Dockerfile)

## Step-by-Step Explanation
1. Add compound index to Mongoose schema: `userSchema.index({ email: 1, role: 1 });`.
2. Create `backend/Dockerfile` declaring Node Alpine base image, dependency installation, and start command.
3. Create `.github/workflows/ci.yml` configuring GitHub Actions workflow.
4. Push code to GitHub and observe automated CI pipeline testing execution.

## Code Examples
```dockerfile
# Backend Production Dockerfile Example
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 8000
CMD ["node", "src/server.js"]
```

```yaml
# GitHub Actions CI Workflow Example (.github/workflows/ci.yml)
name: MERN Stack CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Test Backend
        run: |
          cd backend
          npm install
          npm test
      - name: Build Frontend
        run: |
          cd frontend
          npm install
          npm run build
```

## Practical Exercise
1. Inspect `.github/workflows/ci.yml` in project root.
2. Build local backend Docker image: `docker build -t mern-backend ./backend`.
3. Run container locally: `docker run -p 8000:8000 mern-backend`.

## Common Errors
* **Docker build failure missing files**: Forgot to copy `package.json` before `RUN npm install` or omitted `.dockerignore`.

## How to Debug
Run `docker logs <container_id>` to view terminal stdout inside a running Docker container.

## Homework
Add React code-splitting using `React.lazy()` for all route components in `AppRoutes.jsx`.

## Expected Result
A production-ready, containerized MERN application backed by automated GitHub Actions CI/CD testing pipelines.

## Interview Questions
1. *What problem does Docker containerization solve in software development?*
2. *Why is database indexing critical for query performance at scale?*

## Day Summary
Congratulations! You have completed the expanded 18-Day / 54-Hour MERN Stack Development Course!
