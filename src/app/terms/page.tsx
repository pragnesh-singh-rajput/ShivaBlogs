
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Users, Mail } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <header className="py-8 md:py-12 border-b-2 border-primary text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <FileText className="mr-3 h-8 w-8" />
              Our Commitment to You
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-10 [&_li]:my-1">
            <p>
              Welcome to ShivaBlogs! These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using ShivaBlogs, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <ShieldCheck className="mr-3 h-8 w-8" />
              Data Collection and Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-10 [&_li]:my-1">
            <p>
              <strong>What We Collect:</strong>
            </p>
            <ul>
              <li>
                <strong>Newsletter Subscription:</strong> If you choose to subscribe to our newsletter, we collect your email address.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect anonymous information about how you interact with our website (e.g., pages visited, time spent on site). This is typically done through standard web analytics tools and helps us improve your experience. This data is aggregated and does not personally identify you.
              </li>
            </ul>
            <p>
              <strong>How We Use Your Data:</strong>
            </p>
            <ul>
              <li>
                <strong>To Send Newsletters:</strong> If you subscribe, we use your email address to send you periodic newsletters containing articles, updates, and other information related to the content of ShivaBlogs.
              </li>
              <li>
                <strong>To Improve Our Services:</strong> Anonymous usage data helps us understand what content is popular, how users navigate the site, and how we can make ShivaBlogs better.
              </li>
              <li>
                <strong>To Communicate With You:</strong> We may use your email address to respond to your inquiries or provide information you've requested.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Users className="mr-3 h-8 w-8" />
              Data Sharing and Third Parties
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-10 [&_li]:my-1">
            <p>
              <strong>We Do Not Sell Your Personal Data.</strong> Your privacy is important to us.
            </p>
            <p>
              <strong>Third-Party Service Providers:</strong> We may use third-party companies to help us operate our website and deliver our newsletter (e.g., email marketing services). These companies will only have access to your personal information (like your email address) as necessary to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
              <strong>Legal Requirements:</strong> We may disclose your personal information if required to do so by law or in the good faith belief that such action is necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation.</li>
              <li>Protect and defend the rights or property of ShivaBlogs or PragneshKumar S. Singh.</li>
              <li>Prevent or investigate possible wrongdoing in connection with the service.</li>
              <li>Protect the personal safety of users of the service or the public.</li>
            </ul>
            <p>
              <strong>Aggregated Data:</strong> We may share aggregated, anonymized demographic information with partners or for public relations. This information cannot be used to identify individual persons.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <FileText className="mr-3 h-8 w-8" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-10 [&_li]:my-1">
            <p>
              You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.
            </p>
            <p>
              Content you find on this blog is for informational purposes only. PragneshKumar S. Singh and ShivaBlogs are not liable for any errors or omissions in this information nor for the availability of this information.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <FileText className="mr-3 h-8 w-8" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-10 [&_li]:my-1">
            <p>
              All content on ShivaBlogs, including text, graphics, logos, and images, is the property of PragneshKumar S. Singh or its content suppliers and protected by international copyright laws. Unauthorized use and/or duplication of this material without express and written permission from this site’s author and/or owner is strictly prohibited.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <FileText className="mr-3 h-8 w-8" />
              Changes to These Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/70 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Mail className="mr-3 h-8 w-8" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none text-foreground [&_a]:text-accent [&_a:hover]:underline [&_p]:pl-3 [&_p]:border-l-2 [&_p]:border-primary/40 [&_p]:mb-5">
            <p>
              If you have any questions about these Terms, please contact us. You can find contact information on my portfolio website: <a href="https://pragneshsingh.works/" target="_blank" rel="noopener noreferrer">pragneshsingh.works</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

    