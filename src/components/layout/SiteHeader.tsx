import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-bold text-primary hover:text-primary/90 transition-colors">
          Tech Prastish
        </Link>
        <nav>
          {/* Future navigation links can go here */}
          {/* Example:
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          */}
        </nav>
      </div>
    </header>
  );
}
