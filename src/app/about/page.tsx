import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <header className="py-8 md:py-12 border-b-2 border-primary text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            About Pragnesh Singh
          </h1>
        </header>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <UserCircle className="mr-3 h-8 w-8" />
              My Journey & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground/90 [&_a]:text-accent [&_a:hover]:underline">
            <p>
              Hello! I&apos;m Pragnesh Singh, a dedicated Cyber Security professional with a passion for technology and its ever-evolving landscape. My journey in the tech world has been driven by a constant curiosity and a commitment to understanding and mitigating digital threats.
            </p>
            <p>
              This blog, &quot;ShivaBlogs,&quot; serves as a platform where I share insights, articles, and explorations related to cyber security, VAPT, SOC, DFIR, and various other technology domains including cloud computing, blockchain, AI/ML, and general IT advancements.
            </p>
            <p>
              My professional portfolio at <a href="https://pragneshsingh.works/" target="_blank" rel="noopener noreferrer">pragneshsingh.works</a> showcases a more detailed overview of my projects, skills, and professional experiences.
            </p>
            <p>
              I believe in continuous learning and sharing knowledge. Whether you&apos;re a fellow tech enthusiast, a student, or a professional in the field, I hope you find the content here valuable and thought-provoking.
            </p>
            <p>
              Feel free to connect with me through my portfolio or explore the articles here.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
