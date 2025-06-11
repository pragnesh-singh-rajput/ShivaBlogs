
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.mdx'],
  define: {
    __VITE_MDX_FILES__: JSON.stringify({
      'advanced-penetration-testing-techniques': '/src/blogs/advanced-penetration-testing-techniques.mdx',
      'zero-trust-architecture-implementation': '/src/blogs/zero-trust-architecture-implementation.mdx',
      'ai-powered-threat-detection': '/src/blogs/ai-powered-threat-detection.mdx',
    })
  }
}));
