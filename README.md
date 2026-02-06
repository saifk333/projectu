# Science Quest

Science Quest is a role-based educational platform with Admin, Teacher, and Student accounts.

## Features

- **Admin**: Full system authority; creates and manages Teacher/Student accounts, assigns single grade per student (Grade 9+), assigns grades per teacher, defines and locks 4 Science Worlds (10 lessons × 20 questions each), manages badge types and linking, configures hint types/prices/daily limits and store rules (no duplicate unused hints), and sends system-wide or grade-restricted notifications with text/files/video links. Views all student data with grade filters.
- **Teacher**: Limited strictly to assigned grades; creates custom questions/activities for those grades, sets points and difficulty, monitors progress in real time, manually awards badges after full world completion, and sends notifications/files/videos only to selected assigned grade(s). Cannot delete worlds or modify system rules.
- **Student**: Restricted to assigned grade; progresses through 4 worlds by completing lessons, earns points to unlock lessons/worlds, customizes avatar with unlocked characters/colors/accessories, buys hints within daily limits and must use owned hints before repurchasing same type, receives badges only when awarded by teachers, and views notifications/achievements.

## Project Structure

- `client/`: React Frontend
- `server/`: Node/Express Backend

## Getting Started

### Prerequisites
- Node.js installed

### Setup

1. **Install Dependencies**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

2. **Run Backend**
   ```bash
   cd server
   npm run dev
   ```

3. **Run Frontend**
   ```bash
   cd client
   npm run dev
   ```

## Publishing to GitHub
- License: Project uses MIT License ([LICENSE](./LICENSE)).
- Community Health: Includes [Code of Conduct](./.github/CODE_OF_CONDUCT.md), [Security Policy](./.github/SECURITY.md), [Contributing Guide](./CONTRIBUTING.md), Issue/PR templates, and CODEOWNERS.
- CI: Client lint/build runs on pushes and PRs to `main` via GitHub Actions ([ci.yml](./.github/workflows/ci.yml)).
- Pages: Client is built and deployed to GitHub Pages from `client/dist` on `main` ([deploy-pages.yml](./.github/workflows/deploy-pages.yml)).

## Environment Variables
- Server uses `dotenv`. Create `server/.env`:
  ```
  PORT=5000
  ```
  Do not commit `.env` files.

## RBAC Enforcement (Frontend)
- Protected routes in [`App.jsx`](./client/src/App.jsx) gate access based on role.
- Authentication context in [`AuthContext.jsx`](./client/src/context/AuthContext.jsx) provides mock login for demo: `admin`, `teacher`, `student`.
- Dashboards reflect role capabilities:
  - Admin: [`AdminDashboard.jsx`](./client/src/components/AdminDashboard.jsx)
  - Teacher: [`TeacherDashboard.jsx`](./client/src/components/TeacherDashboard.jsx)
  - Student: [`StudentDashboard.jsx`](./client/src/components/StudentDashboard.jsx)

## Security Practices
- No secrets in source; use environment variables.
- Follow least-privilege principles and validate user input.
- Report vulnerabilities per [Security Policy](./.github/SECURITY.md).
