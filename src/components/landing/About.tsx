import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-card py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              Your Trusted Partner in Financial Clarity
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              At Numera, we believe that understanding your finances is the key to unlocking your business's potential. Our mission is to provide clear, reliable, and expert accounting services that empower you to make confident decisions.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              With a dedicated team of certified professionals, we're committed to your success, offering personalized solutions that fit your unique needs. We're more than just accountants; we're your partners in growth.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">Meet The Team</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Numera team discussion"
              data-ai-hint="team meeting"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
