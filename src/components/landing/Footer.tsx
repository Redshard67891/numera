import Link from 'next/link';
import { Scale, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Scale className="h-6 w-6" />
              <span>Numera</span>
            </Link>
            <p className="mt-4 text-sm text-foreground/70">
              Your partner in financial success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Bookkeeping</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Tax Advisory</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Payroll</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#about" className="text-foreground/70 hover:text-primary">About Us</Link></li>
              <li><Link href="#blog" className="text-foreground/70 hover:text-primary">Blog</Link></li>
              <li><Link href="#contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-foreground/70 hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-foreground/70 hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Numera Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
