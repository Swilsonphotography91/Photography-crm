
# Steven Wilson Photography CRM

A clean, self-hosted CRM built specifically for a photography business.

**Features included (MVP foundation):**
- Dashboard with upcoming shoots & key stats
- Clients (leads → booked → past)
- Bookings / Sessions (with status workflow, dates, venues, deposits)
- Packages (wedding, portrait, family, etc.)
- Invoices & payments tracking
- Expenses tracking (structure ready)
- Notes & tasks (schema ready)

Built with **Next.js 15**, **Prisma**, **SQLite** (easy start) / PostgreSQL, **Tailwind CSS**.

---

## Quick Start (Local Development)

### 1. Install dependencies
```bash
cd photography-crm
npm install
```

### 2. Set up the database
```bash
# Create the SQLite database and tables
npx prisma db push

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

### 3. Run the app
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Hosting on a Subdomain (e.g. `crm.yourdomain.com`)

### Option A – Easiest: Vercel (Recommended for most people)
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Add environment variables:
   - `DATABASE_URL` (use a free Postgres from Neon, Supabase, or Vercel Postgres)
   - `NEXTAUTH_SECRET` (generate one at https://generate-secret.vercel.app/32)
   - `NEXTAUTH_URL` = `https://crm.yourdomain.com`
4. In Vercel project settings → Domains → add `crm.yourdomain.com`
5. In your domain DNS, create a CNAME record:  
   `crm` → `cname.vercel-dns.com`

Done. Your CRM will be live on the subdomain.

### Option B – Railway / Render
Both support Docker or Node + Postgres easily. Connect the GitHub repo, set the same environment variables, and attach a custom domain.

### Option C – Your own VPS (DigitalOcean, Hetzner, Linode, etc.)
1. Install Node.js 20+, PostgreSQL (or keep SQLite for very light use).
2. Clone the repo, `npm install`, `npx prisma db push`.
3. Use PM2 or systemd to run `npm start`.
4. Put Nginx or Caddy in front with SSL (Let’s Encrypt) and point the subdomain to the server.

---

## Switching from SQLite to PostgreSQL (Recommended for production)

1. Change `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Update `.env`:
```
DATABASE_URL="postgresql://user:password@host:5432/photography_crm"
```

3. Run:
```bash
npx prisma db push
```

---

## Next Steps / Roadmap

This is a solid working foundation. You (or I) can continue adding:

- Real database queries on every page (currently using placeholder data so the UI is visible immediately)
- Authentication (login page + protected routes)
- Create / Edit forms for Clients, Bookings, Invoices
- Contract generation (using the Word template we already made)
- Calendar view of bookings
- Email sending of invoices/contracts
- Client portal (optional)

---

## Project Structure

```
photography-crm/
├── prisma/
│   └── schema.prisma          # Database models
├── src/
│   ├── app/
│   │   ├── dashboard/         # Main dashboard
│   │   ├── clients/           # Client list
│   │   ├── bookings/          # Bookings list
│   │   ├── invoices/          # Invoices
│   │   └── packages/          # Packages
│   ├── components/            # Sidebar, layout, etc.
│   └── lib/                   # Prisma client, helpers
├── .env.example
└── README.md
```

---

**Questions or want me to add specific features next?**  
Just tell me (e.g. “add the new client form”, “make the dashboard pull real data”, “add login”, “integrate the contract PDF/Word generation”).
