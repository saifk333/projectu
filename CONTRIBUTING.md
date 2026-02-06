# Contributing to Science Quest

Thanks for your interest in contributing! Please follow these guidelines to keep the project healthy and aligned with GitHub community standards.

## How to Contribute
- Fork the repository and create a feature branch.
- Keep changes focused and cohesive.
- Write clear commit messages and PR descriptions.

## Development Setup
- Client: `cd client && npm ci && npm run dev`
- Server: `cd server && npm ci && npm run dev`

## Code Style
- Use React 18 and Vite on the client, Express on the server.
- Run `npm run lint` in `client` before pushing.

## Tests and Checks
- The repository includes CI that runs lint and build for the client.
- Ensure the client builds locally before submitting PRs.

## Security
- Do not commit secrets. Use `.env` files locally.
- Report vulnerabilities privately via the process in `.github/SECURITY.md`.

## Code of Conduct
- Participation is governed by our [Code of Conduct](.github/CODE_OF_CONDUCT.md).
