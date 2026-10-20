# Church digital platform prototype

The public website and administration workspace are buildless JavaScript. The mobile prototype is a separate Expo TypeScript application. No real church name, beliefs, service time, address, giving details, staff or member information has been supplied; placeholders are intentionally visible.

## Run

Requires Node.js. From this directory:

```powershell
npm.cmd run dev
```

These commands are written for Windows PowerShell. `npm.cmd` uses the standard Windows npm command without changing your PowerShell security settings. In Command Prompt, macOS, Linux, or other shells, use `npm` instead.

Open `http://localhost:4173/` for the public website and `http://localhost:4173/admin.html` for the administration prototype. Public routes use URL hashes so a basic static host works without route rewrites.

For the static distribution:

```powershell
npm.cmd run check
npm.cmd run build
```

Host the generated `dist/` directory on any static web server.

For the native mobile prototype:

```powershell
cd mobile
npm.cmd install
npm.cmd run start
```

The mobile project uses Expo SDK 57 to match current Expo Go on the phone used for this prototype. After an SDK update, stop any old Metro session with `Ctrl+C`, run `npm.cmd run start -- --clear`, then scan the new QR code. Use Expo Go or a local Android emulator. `npm.cmd run android` and `npm.cmd run ios` launch the corresponding Expo targets when native tooling is available. `npm.cmd run typecheck` checks TypeScript.

## Prototype data and boundaries

- `data.js` is the public and admin sample repository. Admin edits to pages, events and settings are saved in this browser's `localStorage` only. Clearing browser data resets them. This is temporary prototype persistence, not a database.
- Contact and prayer forms validate locally and clear their entries. They **do not send or save** personal or sensitive information. Admin inboxes are empty states.
- The admin URL is not secured. Do not deploy it as a production administration service. Sign-in, server-side authorisation and audit logging are future work.
- Mobile data is in `mobile/src/repository.ts`. Its sign-in, profile and notification screens demonstrate navigation only; authentication and push delivery are not connected.
- The giving page is informational. No payment processing exists.
- Add approved church branding, photography, copy, contact details, schedules, beliefs, privacy policy and donation details before public launch.

## Shared backend path

Replace the repositories with a versioned API. Keep public content, member information and administrative operations on separate authorised endpoints. Planned production services: managed PostgreSQL, secure authentication, server-side role checks, object storage for media, retention and deletion workflows, audit logs and a POPIA-reviewed privacy process. Never rely on browser status or role values for authorisation.

