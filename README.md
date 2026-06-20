# 🤖 Social Media Agent

> An AI-powered social media scheduling and management platform that automates posting across multiple social channels.

**Developer:** Harshit Shira

---

## 🚀 Features

- 🗓️ **Multi-Platform Scheduling** — Schedule and auto-publish posts to Twitter and LinkedIn
- 🔐 **OAuth 2.0 Integration** — Secure authentication with PKCE support for each social platform
- 🤖 **AI-Powered Content** — AI assistance for generating and optimizing social media content
- 📅 **Calendar View** — Visual drag-and-drop calendar for managing your content pipeline
- 🔄 **Token Auto-Refresh** — Seamless background token refresh to keep all connections alive
- 📊 **Background Job Processing** — Reliable background task execution via Inngest
- 🔒 **Authentication & User Management** — Powered by Clerk with JWT-based session handling
- 🎨 **Modern UI Components** — ShadCN, and Tailwind CSS

---

## 🛠️ Tech Stack

| Category            | Technology                          |
|---------------------|--------------------------------------|
| **Framework**       | Next.js 16                           |
| **Language**        | TypeScript 5                         |
| **Styling**         | Tailwind CSS 4, ShadCN UI            |
| **Auth**            | Clerk (`@clerk/nextjs`)              |
| **Database/Backend**| InsForge SDK (`@insforge/sdk`)       |
| **Background Jobs** | Inngest                              |
| **UI Components**   | Lucide React, HugeIcons              |
| **Social OAuth**    | Custom OAuth 2.0 provider library    |

---

## 📦 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/harshitshira/social-media-agent.git
cd social-media-agent

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Supported Platforms

`Twitter` &nbsp; `LinkedIn`

---

---

<p align="center">Made by <strong>Harshit Shira</strong></p>
