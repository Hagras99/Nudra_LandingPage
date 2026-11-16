# Nudra landing page and early access

A standalone repository for the Nudra landing page and early access form. The main Nudra app and live registration data are not included.

## Run from the repository root

Requirements: Node.js 20.19+ or 22.12+, and Python 3.9+ available as `python3` (or `python` on Windows).

```sh
npm install
npm run dev
```

Open the preview on port 3000. Vite starts the early access service on local port 4181 and forwards `/early-access/` and `/api/` to it. Form submissions are stored in `data/early-access.sqlite`, which is ignored by Git. To select a Python executable, set the `PYTHON` environment variable before starting Vite.

The landing page source is in `src/`, illustrations are in `public/assets/images/`, and the form is in `early-access/public/`.

## Production build

```sh
npm install
npm run build
python3 early-access/server.py
```

The Python service serves the built page, form, and API on `127.0.0.1:4181` by default. Set `HOST`, `PORT`, or `NUDRA_DATA_DIR` to change the bind address, port, or database directory. Keep the database private and back it up separately. Add rate limiting at the proxy or Cloudflare for public use.

The current home-server deployment is separate. Pushing changes to GitHub does not automatically update it.
