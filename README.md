# Nixi / APiX Website

This version keeps the existing design and pages and includes backend reliability fixes.


## Run locally
1. Install Node.js 22 or newer.
2. Open this folder in VS Code.
3. In Terminal, run `npm start`.
4. Open `http://localhost:3000` in your browser.
5. Admin panel: `http://localhost:3000/admin`.

## Updates in this package
- Missing database file is initialized safely instead of crashing with ENOENT.
- Saves use unique temporary files before replacing the database file.
- Registration checks duplicate emails early and again before creating the account.
- DNS/email-domain checks have a short timeout so slow DNS won't stall signup.
- Login email matching trims whitespace and ignores case.
- Malformed password hashes no longer cause a server error during login.
- APX conversion amounts must be positive whole-number amounts and within the available balance.

## Important hosting note
The website uses a JSON file for account and transaction storage. To keep user records and uploaded receipts after redeployments, the hosting service must have persistent storage configured. On Render, attach a Persistent Disk mounted at `/var/data`, then set:
- `NIXI_DATA_DIR=/var/data`
- `NIXI_UPLOADS_DIR=/var/data/uploads` (optional; defaults to `/var/data/uploads` when `NIXI_DATA_DIR` is set)
- `NIXI_ADMIN_KEY` to a private admin key of your choice
- `NIXI_SESSION_SECRET` to a long random secret

Do not deploy to a host with an ephemeral filesystem and expect JSON account records or receipts to survive redeploys. Back up the data file before any deployment or storage change.


## Security status
This remains a sandbox/manual-review demo, not a production payment platform. Email domain checks do not verify mailbox ownership; email OTP/link verification is still needed. Admin access should use a strong secret, and production deployment needs database-backed storage, rate limiting, CSRF protections, HTTPS, logging, and security review.
