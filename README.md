# 🧠 IDF SaaS AI Platform

A full-stack AI-powered SaaS platform enabling users to generate content such as text, images, and code using OpenAI's APIs. The application incorporates user authentication, subscription management, and a modular architecture for scalability.

Live Demo: [https://idf-saas-ai.vercel.app](https://idf-saas-ai.vercel.app)

---

## 🚀 Features

- ✍️ **AI Content Generation**: Generate text, images, and code using OpenAI APIs.
- 🔐 **User Authentication**: Secure authentication and user management.
- 💳 **Subscription Management**: Integrate Stripe for handling user subscriptions.
- 🧩 **Modular Architecture**: Easily extendable components for adding new features.
- 📊 **Usage Tracking**: Monitor user activity and API usage.

---

## 🛠️ Tech Stack

| Area       | Technologies                         |
|------------|--------------------------------------|
| Frontend   | Next.js, React, Tailwind CSS         |
| Backend    | Node.js, Next.js API Routes          |
| AI/ML      | OpenAI API                           |
| Database   | Prisma ORM, PostgreSQL               |
| Authentication | Clerk.dev                        |
| Payments   | Stripe                               |
| Deployment | Vercel                               |

---

## 📸 Screenshots

> _Note: Replace the placeholders with actual screenshots._

- ![Dashboard](docs/screenshot-dashboard.png)
- ![AI Tool Interface](docs/screenshot-ai-tool.png)

---

## 🧠 Architecture Overview

```
[ Next.js (Frontend) ]
       ↓
[ API Routes (Backend) ]
       ↓
[ OpenAI API Integration ]
       ↓
[ Prisma ORM → PostgreSQL ]
       ↓
[ Authentication (Clerk.dev) & Payments (Stripe) ]
```

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aoddy10/idf-saas-ai.git
cd idf-saas-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Refer to `.env.example` for guidance.

### 4. Set Up the Database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 💡 Future Improvements

- [ ] Implement additional AI tools (e.g., music generation).
- [ ] Enhance user dashboard with analytics.
- [ ] Add internationalization support.
- [ ] Integrate more payment options.

---

## 📄 License

This project is intended for demonstration purposes and is not licensed for commercial use. For inquiries, please contact [anirut.puangkingkaew@gmail.com](mailto:anirut.puangkingkaew@gmail.com).
