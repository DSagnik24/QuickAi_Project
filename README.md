# 🧠 QuickAI SaaS Project

An AI-powered SaaS application built with Node.js, Clerk, Neon DB, Google Gemini, Cloudinary, and ClipDrop.

---

## 🚀 How to Setup & Run QuickAI

### 📦 Prerequisites
- Node.js installed ([Download here](https://nodejs.org/en/download/))
- A Neon Database account ([Neon.tech](https://neon.tech))
- API accounts for:
  - [Cloudinary](https://cloudinary.com/users/register_free)
  - [Clerk Authentication](https://clerk.com)
  - [Clipdrop API](https://clipdrop.co/apis)
  - [Google Gemini API](https://aistudio.google.com/apikey)

---

## ⚙️ Server Setup

1. **Open the Project Folder** in VS Code.  
2. **Setup Neon Database:**
   - Create a database and run the following SQL in Neon SQL Editor:
     ```sql
     CREATE TABLE creations (
         id SERIAL PRIMARY KEY,
         user_id TEXT NOT NULL,
         prompt TEXT NOT NULL,
         content TEXT NOT NULL,
         type TEXT NOT NULL,
         publish BOOLEAN DEFAULT FALSE,
         likes TEXT[] DEFAULT '{}',
         created_at TIMESTAMPTZ DEFAULT NOW(),
         updated_at TIMESTAMPTZ DEFAULT NOW()
     );
     ```
3. **Configure `.env`**
   ```env
   # Neon Database
   DATABASE_URL='your_neon_connection_url'

   # Clerk Auth
   CLERK_PUBLISHABLE_KEY='your_publishable_key'
   CLERK_SECRET_KEY='your_secret_key'

   # Google Gemini
   GEMINI_API_KEY='your_gemini_api_key'

   # Clipdrop
   CLIPDROP_API_KEY='your_clipdrop_api_key'

   # Cloudinary
   CLOUDINARY_CLOUD_NAME='your_cloud_name'
   CLOUDINARY_API_KEY='your_cloud_api_key'
   CLOUDINARY_API_SECRET='your_cloud_secret'
