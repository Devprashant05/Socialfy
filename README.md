<h1 align="center">Socialfy - Social Media App 🌐</h1>
<p>A modern social media application built with Next.js, Prisma, Neon, Clerk, UploadThing, and shadcn/ui.</p>

![Demo App](/public/preview.png)

## 🚀 Live Demo

https://socialfy-seven.vercel.app/

## 🛠 Tech Stack

**FRONTEND:** Next JS, TailwindCSS, ShadCN/UI

**Database/ORM:** Neon DB, Prisma

**Other Tools:** Clerk, UploadThings

## ✨ Features

-   🔑 User Authentication
-   📝 Create, and delete posts
-   👤 Edit profile
-   📜 💬 Like, comment, notification functionality
-   ⚡ Modern UI powered by shadcn/ui

## Installation

### Clone the repo:

```bash
git clone https://github.com/Devprashant05/Socialfy.git

cd your-repo-name
```

### Setup .env in root:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_next_public_clerk_key

CLERK_SECRET_KEY=your_clerk_key

DATABASE_URL=your_db_url

UPLOADTHING_TOKEN=your_upload_thing_token
```

### Run Project:

```bash
    npm install
    npx prisma migrate dev
    npm run dev
```

## Learnings from this Project
- Learned Next.js App Router & Server Actions

- Hands-on with Prisma schema & DB migrations

- Auth flows with Clerk

- File handling with UploadThing

- Building a consistent UI with shadcn/ui

## 🤝 Contributing

<p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

## Feedback

If you have any feedback, please reach out to us at devprashant0305@gmail.com
