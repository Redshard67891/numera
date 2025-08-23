import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Common Bookkeeping Mistakes to Avoid",
    excerpt: "Learn about the frequent errors small businesses make and how you can prevent them to maintain financial health.",
    image: "https://placehold.co/600x400.png",
    imageHint: "office desk"
  },
  {
    title: "Understanding Your Business Tax Deductions",
    excerpt: "Maximize your tax savings by understanding the key deductions available to your business. A must-read before tax season.",
    image: "https://placehold.co/600x400.png",
    imageHint: "calculator paperwork"
  },
  {
    title: "Is It Time to Outsource Your Payroll?",
    excerpt: "Outsourcing payroll can save time and reduce errors. Discover the benefits and decide if it's the right move for you.",
    image: "https://placehold.co/600x400.png",
    imageHint: "team collaboration"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="bg-card py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Insights from Our Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Stay informed with the latest tips and news in finance and accounting.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image src={post.image} alt={post.title} data-ai-hint={post.imageHint} width={600} height={400} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
