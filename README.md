# 🚀 ShivaBlogs - Cybersecurity & Tech Blog

[![Built with Love](https://img.shields.io/badge/Built%20with-❤️-red.svg)](https://pragneshsingh.works/)
[![Powered by React](https://img.shields.io/badge/Powered%20by-React-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC.svg)](https://tailwindcss.com/)

> 🔐 **Securing the digital world, one blog at a time** by [Pragnesh Singh Rajput](https://pragneshsingh.works/)

## 🌟 About ShivaBlogs

Welcome to **ShivaBlogs** - your ultimate destination for cutting-edge cybersecurity insights, penetration testing techniques, and technology trends! This platform is designed and maintained by **Pragnesh Singh Rajput**, a passionate cybersecurity professional dedicated to sharing knowledge and securing the digital landscape.

### 🎯 What You'll Find Here

- 🛡️ **Cybersecurity Best Practices** - Advanced security methodologies and frameworks
- 🔍 **Penetration Testing** - Real-world testing techniques and case studies  
- 🐧 **Linux & System Administration** - Command-line mastery and system hardening
- 🤖 **AI in Security** - Machine learning applications in threat detection
- 🏗️ **Security Architecture** - Zero-trust implementations and secure design patterns
- 📊 **Threat Intelligence** - Latest attack vectors and defense strategies

## ✨ Features

### 🎨 Modern Design
- **Cyberpunk-inspired UI** with neon accents and matrix-style animations
- **Fully responsive** design that works perfectly on all devices
- **Dark theme optimized** for comfortable reading during long security sessions

### 🔍 Enhanced User Experience
- **Advanced search functionality** to find exactly what you need
- **Category-based filtering** for targeted content discovery
- **Reading time estimates** to help you plan your learning sessions
- **Featured articles** highlighting the most important content

### 📧 Newsletter Integration
- **Resend API integration** for professional email marketing
- **Smart subscription management** with automatic name extraction
- **Unsubscribe functionality** with proper contact management
- **Email validation** and error handling

### ⚡ Performance & SEO
- **Lightning-fast loading** with optimized React components
- **SEO optimized** for maximum visibility on search engines
- **Social media integration** for easy content sharing
- **Structured data** for rich search results

## 🛠️ Technology Stack

This blog is built with modern web technologies to ensure the best performance and user experience:

- ⚛️ **React 18** - Modern UI framework with hooks and functional components
- 🔷 **TypeScript** - Type-safe development for better code quality
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🧩 **Shadcn/ui** - Beautiful, accessible component library
- 📝 **MDX** - Markdown with JSX for rich content creation
- 🚀 **Vite** - Next-generation frontend build tool
- 🔍 **React Query** - Powerful data fetching and state management
- 🎯 **React Router** - Declarative routing for single-page applications
- 📧 **Resend API** - Professional email service for newsletters

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- 📦 **Node.js** (v18 or higher)
- 🧶 **npm** or **yarn** package manager
- 💻 **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shivablogs.git
   cd shivablogs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Resend API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxx
   RESEND_AUDIENCE_ID=0b16dbe7-4b46-4727-95d4-867445b91406
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🔍 Lint code with ESLint |

## 📧 Newsletter Configuration

### Setting up Resend

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Create an audience** and note the audience ID
4. **Update environment variables** with your credentials

### API Endpoints

The newsletter functionality includes two main endpoints:

- **Subscribe**: `POST /api/newsletter/subscribe`
- **Unsubscribe**: `POST /api/newsletter/unsubscribe`

### Features

- ✅ **Email validation** and sanitization
- ✅ **Automatic name extraction** from email addresses
- ✅ **Duplicate handling** with resubscription support
- ✅ **Error handling** with user-friendly messages
- ✅ **Loading states** and success feedback
- ✅ **CORS support** for cross-origin requests

## 📂 Project Structure

```
src/
├── 📁 components/          # Reusable UI components
│   ├── 🎨 Layout.tsx      # Main layout wrapper
│   ├── 📰 BlogCard.tsx    # Blog post preview cards
│   ├── 🔍 SearchBar.tsx   # Search functionality
│   ├── 📧 NewsletterSubscription.tsx # Newsletter signup
│   ├── 📧 UnsubscribeForm.tsx # Newsletter unsubscribe
│   └── 🎭 ui/             # Shadcn/ui components
├── 📁 pages/              # Page components
│   ├── 🏠 Index.tsx       # Homepage
│   ├── 📖 BlogPost.tsx    # Individual blog post
│   ├── 👤 About.tsx       # About page
│   └── 📧 Unsubscribe.tsx # Unsubscribe page
├── 📁 hooks/              # Custom React hooks
├── 📁 utils/              # Utility functions
├── 📁 api/                # API utilities and types
├── 📁 blogs/              # MDX blog content
└── 🎨 styles/             # CSS and styling
```

## 📝 Content Management

### Adding New Blog Posts

1. **Create a new MDX file** in the `src/blogs/` directory
2. **Add frontmatter** with metadata:
   ```mdx
   ---
   title: "Your Amazing Blog Post Title"
   excerpt: "A compelling description of your post"
   date: "2024-12-08"
   category: "Cybersecurity"
   readTime: "8 min read"
   featured: false
   ---
   
   # Your Blog Content Here
   ```

3. **Update the blog loader** in `src/utils/mdxLoader.ts` to include your new post

### Content Guidelines

- 🎯 **Focus on actionable insights** and practical knowledge
- 🔒 **Emphasize security best practices** in all technical content
- 📚 **Include code examples** and real-world scenarios
- 🏷️ **Use appropriate categories** for easy discovery
- ⏱️ **Estimate reading time** accurately for user planning

## 🔒 Security Features

- 🛡️ **Content Security Policy** headers for XSS prevention
- 🔐 **HTTPS enforcement** in production
- 🚫 **Input sanitization** for all user interactions
- 🔍 **Regular dependency updates** for vulnerability patches
- 📧 **Email validation** and rate limiting for newsletter

## 🌐 SEO Optimization

This blog is optimized for search engines with:

- 📊 **Structured data markup** for rich snippets
- 🎯 **Targeted keywords** for cybersecurity and tech content
- 📱 **Mobile-first responsive design**
- ⚡ **Core Web Vitals optimization**
- 🔗 **Internal linking strategy** for better crawling

## 🚀 Deployment

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_audience_id
NODE_ENV=production
```

### Deployment Platforms

This project can be deployed to:

- **Vercel** (recommended for serverless functions)
- **Netlify** (with Netlify Functions)
- **Railway** or **Render** (for full-stack deployment)

## 🤝 Contributing

We welcome contributions from the cybersecurity community! Here's how you can help:

### 💡 Ways to Contribute

1. **📝 Content Creation** - Submit guest blog posts on security topics
2. **🐛 Bug Reports** - Report issues and help improve the platform
3. **✨ Feature Requests** - Suggest new functionality
4. **🔧 Code Improvements** - Enhance performance and user experience

### 📋 Contribution Process

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📞 Connect with Pragnesh

- 🌐 **Portfolio Website**: [pragneshsingh.works](https://pragneshsingh.works/)
- 💼 **LinkedIn**: [Connect with Pragnesh](https://linkedin.com/in/pragneshsingh)
- 🐦 **Twitter**: Follow for security updates
- 📧 **Email**: Contact for collaboration opportunities

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- 🙏 **Open Source Community** for providing amazing tools and libraries
- 🛡️ **Cybersecurity Community** for continuous knowledge sharing
- 🎨 **Design Inspiration** from cyberpunk aesthetics and modern web design
- ⚡ **Performance Optimizations** inspired by web.dev best practices
- 📧 **Resend Team** for providing excellent email infrastructure

---

<div align="center">

### 🚀 **Ready to Secure Your Digital Future?**

**[Visit ShivaBlogs Now!](https://shivablogs.com)** | **[Explore Pragnesh's Portfolio](https://pragneshsingh.works/)**

*Built with ❤️ and lots of ☕ by Pragnesh Singh Rajput*

</div>

---

> 💡 **Pro Tip**: Star ⭐ this repository if you found it helpful! It helps others discover quality cybersecurity content.