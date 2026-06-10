# Ishwarya Anandakrishnan — Portfolio

Personal portfolio with an AI-powered "Ask me anything" chat window.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Anthropic Claude API

## 🚀 Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
gh repo create ishwarya-portfolio --public --push
# or create repo manually on github.com and push
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Under **Environment Variables**, add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your key from [console.anthropic.com](https://console.anthropic.com)
4. Click **Deploy** ✅

### Step 3 — Get your Anthropic API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up / log in → **API Keys** → **Create Key**
3. Paste into Vercel env vars

## 💻 Run Locally

```bash
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
npm install
npm run dev
# Open http://localhost:3000
```

## ✏️ Customization

All content lives in `app/page.tsx`:
- `SKILLS` — update your tech stack
- `EXPERIENCE` — edit job entries
- `PROJECTS` — swap in your projects
- `EDUCATION` — update degrees
- `SYSTEM_PROMPT` in `app/api/chat/route.ts` — controls what the AI knows about you
