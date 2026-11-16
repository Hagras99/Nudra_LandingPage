# Nudra landing page and early access

A standalone landing page and early access form for Nudra. This repository does not contain the main Nudra application or registration data.

## Folders

- `landing-page/`: React and Vite source, illustrations, and styling.
- `early-access/public/`: early access form HTML, CSS and JavaScript.
- `early-access/server.py`: serves the built landing page and form, and stores submissions in SQLite.
- `data/`: created at runtime for the database; ignored by Git.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and Python 3.9+.

```sh
cd landing-page
npm install
npm run build
cd ..
python early-access/server.py
```

Open http://127.0.0.1:4181. The Start learning buttons lead to `/early-access/`. Submissions are written to `data/early-access.sqlite`. Rebuild after changing the React landing page. The form files are served directly, so they do not require a rebuild.

For frontend development, `cd landing-page && npm run dev` starts Vite. The form and API are served by the Python service; use the built site for an end-to-end preview.

## Server configuration

Set `HOST`, `PORT`, or `NUDRA_DATA_DIR` to change the bind address, port, or database directory. The default binds to `127.0.0.1:4181`. Keep the database directory private and back it up separately. Never commit the database or tunnel credentials to GitHub.

The production server currently uses `/opt/nudra-site`, with a separate deployed copy and database. Editing this repository or pushing it to GitHub does not automatically update that server. The server script in this repository uses repository-relative paths and must be configured appropriately when deploying.

The service performs input validation and deduplicates email addresses. Add appropriate rate limiting at the proxy or Cloudflare before public deployment.
