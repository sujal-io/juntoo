# Juntoo

Juntoo is a modern social media web application built with Next.js, TypeScript, Prisma, and PostgreSQL. The goal of this project is to create a scalable and interactive platform where users can connect, share content, and engage with others through posts, follows, and notifications.

This project is also part of my journey in learning full-stack development and gaining hands-on experience with authentication, database design, server actions, and modern web application architecture.

---

## ✨ Features

### Authentication & User Management

* Secure authentication with Clerk
* Automatic user synchronization with the database
* User profiles with:

  * Profile picture
  * Bio
  * Location
  * Website
* Dark / Light mode support

### Social Features

* Create posts
* Follow and unfollow users
* "Who to Follow" recommendations
* Follow notifications
* User follower and following counts
* Personalized sidebar with user information

### UI & Experience

* Responsive navigation for desktop and mobile
* Mobile sidebar menu
* Theme-aware UI
* Modern reusable component architecture
* Built using Next.js App Router

---

## 🛠️ Tech Stack

### Frontend

* Next.js 14
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL

### Authentication

* Clerk

### UI & Styling

* Radix UI
* Lucide Icons
* next-themes

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd juntoo
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_database_url

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key

CLERK_SECRET_KEY=your_secret_key
```

Generate Prisma Client:

```bash
npx prisma generate
```

Push schema changes:

```bash
npx prisma db push
```

---

## 📌 Current Progress

Currently implemented:

* Clerk authentication
* User synchronization with PostgreSQL
* Prisma database integration
* Responsive navbar
* Mobile navigation
* Theme switching
* User profile sidebar
* Create post functionality
* Follow / unfollow functionality
* Follow notifications
* Who-to-follow recommendations
* Reusable UI component system
* Server Actions architecture

---

## 🎯 Planned Features

* Post likes
* Comments system
* Post feed optimization
* User search
* Notification center
* Image uploads
* Profile editing
* Real-time updates
* Real-time chat
* Infinite scrolling
* Deployment and production optimizations

---

## 📚 Learning Goals

This project focuses on improving my understanding of:

* Full-stack web development
* Authentication workflows
* Database modeling and relationships
* Prisma ORM
* PostgreSQL
* Server Actions in Next.js
* Responsive UI design
* Scalable application architecture
* Real-world social media features

---


