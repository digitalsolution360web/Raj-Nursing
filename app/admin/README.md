# Admin Dashboard – Raj Nursing Home

## Access
- **URL:** `/admin`
- **Default password:** `admin-raj-nursing-2025` (change via env)

## Environment (optional)
Create `.env.local`:
```
NEXT_PUBLIC_ADMIN_SECRET=your-secure-password
ADMIN_SECRET=your-secure-password
```
Use the same value for both. This is the password to sign in and the token for API calls.

## Features
- **Blogs:** List, add, edit, delete blog posts
- **Dynamic blog page:** Public `/blog` and `/blog/[slug]` read from `data/blogs.json` (and from admin API when you add/edit)

## Note
Blog data is stored in `data/blogs.json`. When you add or edit posts via the dashboard (running locally), the file is updated. Deploy the repo after changes so the live site shows new posts.
