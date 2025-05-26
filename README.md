
# ShivaBlogs 🚀 – Cyber Security & Tech Insights

Welcome to ShivaBlogs, the personal blog of PragneshKumar S. Singh, a Cyber Security professional and tech enthusiast. This platform is dedicated to sharing insights, articles, and explorations in the vast world of technology.

![ShivaBlogs Homepage Screenshot](https://github.com/user-attachments/assets/b0bba7af-357d-47e2-93f4-d75f03790f12)

## ✨ Key Features

*   **Modern Tech Blog**: Built with Next.js App Router for a fast and interactive experience.
*   **Cyberpunk Aesthetics**: Styled with Tailwind CSS for a unique, dark, neon-accented theme.
*   **Blog Post Management**: Easy-to-manage blog content stored in HTML files.
*   **Dynamic Content**:
    *   Individual post pages with rich content display.
    *   Tag-based content discovery.
    *   Full-text search functionality.
*   **Newsletter Subscription**: Integrated with Resend.com for newsletter sign-ups.
*   **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
*   **About & Terms Pages**: Essential static pages for user information.

## 🛠️ Tech Stack

*   **Framework**: Next.js 14+ (App Router, Server Components)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS & ShadCN UI Components
*   **Newsletter**: Resend.com API
*   **Icons**: Lucide React
*   **Fonts**: Geist Sans, Geist Mono

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.17 or later recommended)
*   npm or yarn (or pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```
    *(Replace `YOUR_USERNAME/YOUR_REPOSITORY_NAME` with your actual GitHub repo details)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables:**
    This project uses Resend.com for newsletter subscriptions. You'll need to create a `.env.local` file in the root of your project and add your Resend API Key and Audience ID.
    ```env
    # .env.local
    RESEND_API_KEY=re_YOUR_RESEND_API_KEY
    RESEND_AUDIENCE_ID=YOUR_RESEND_AUDIENCE_ID
    ```
    *   Get your `RESEND_API_KEY` from [Resend Dashboard](https://resend.com/api-keys).
    *   Get your `RESEND_AUDIENCE_ID` from [Resend Audiences](https://resend.com/audiences).
    **Note**: `.env.local` is included in `.gitignore` and should not be committed to your repository.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json`'s `dev` script) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts a Next.js production server.
*   `npm run lint`: Lints the project files using Next.js' built-in ESLint configuration.
*   `npm run typecheck`: Runs TypeScript type checking.

## 🚀 Deployment

This Next.js application can be deployed to any platform that supports Node.js applications, such as:
*   Vercel (Recommended for Next.js)
*   Netlify
*   Firebase Hosting (with Cloud Functions or Cloud Run for SSR)
*   AWS Amplify
*   DigitalOcean App Platform
*   And many others!

Ensure your environment variables (`RESEND_API_KEY`, `RESEND_AUDIENCE_ID`) are set up in your deployment environment.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to:
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a PullRequest

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file (if one exists) for details. (You might want to add an MIT License file if you don't have one).

---

Made with ❤️ by PragneshKumar S. Singh.
Visit my portfolio: [pragneshsingh.works](https://pragneshsingh.works/)
