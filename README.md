# Manasseh Kabutey - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, interactive components, and a chatbot for enhanced user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Components**: 
  - Hero section with animated particles
  - Skills showcase with progress indicators
  - Project portfolio with detailed descriptions
  - Blog section with reading time estimates
  - Contact form with email integration
  - AI-powered chatbot for user interaction
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Particles**: TSParticles for interactive backgrounds
- **Email**: Nodemailer for contact form functionality
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <https://github.com/Qharny/manasseh_kabutey.git>
cd manasseh_kabutey
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your email configuration:
```env
EMAIL_USER=kabuteymanasseh5@gmail.com
EMAIL_PASS=your-app-password
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
manasseh_kabutey/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chat/          # Chatbot API
│   │   └── contact/       # Contact form API
│   ├── components/        # Reusable components
│   │   ├── UI/           # UI components (Button, Card, etc.)
│   │   ├── Chatbot.tsx   # AI chatbot component
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── about.tsx     # About section
│   │   ├── hero.tsx      # Hero section
│   │   ├── project.tsx   # Projects section
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context providers
│   └── utils/            # Utility functions
├── public/               # Static assets
├── components/           # Shared UI components
└── lib/                 # Library utilities
```

## 🎨 Key Components

### Hero Section
- Animated particle background using TSParticles
- Professional introduction with call-to-action buttons
- Smooth scroll navigation

### Skills Section
- Interactive skill cards with progress indicators
- Categorized by technology type
- Animated progress bars

### Projects Section
- Portfolio showcase with project details
- Image galleries and descriptions
- Links to live demos and source code

### Blog Section
- Blog post listings with reading time estimates
- Dynamic routing for individual posts
- Rich content formatting

### Contact Section
- Functional contact form with email integration
- Form validation and error handling
- Success/error feedback

### Chatbot
- AI-powered interactive chatbot
- Real-time responses
- Context-aware conversations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect it's a Next.js project
4. Configure your environment variables
5. Deploy!

## 📧 Email Setup

For the contact form to work, you'll need to configure email settings. See `EMAIL_SETUP.md` for detailed instructions on setting up Gmail SMTP with OAuth2.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Manasseh Kabutey**
- Portfolio: [https://manassehkabutey.vercel.app/]
- LinkedIn: [https://www.linkedin.com/in/manasseh-kabutey]
- GitHub: [https://github.com/qharny]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
