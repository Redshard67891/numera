import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, ReceiptText, Users, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: BookOpenCheck,
    title: "Bookkeeping & Financial Reporting",
    description: "We provide meticulous bookkeeping and insightful financial reports to give you a clear picture of your business's financial health. Stay compliant and make data-driven decisions."
  },
  {
    icon: ReceiptText,
    title: "Tax Preparation & Advisory",
    description: "Navigate the complexities of tax season with ease. Our experts ensure accurate tax preparation and provide strategic advice to minimize liabilities and maximize returns."
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Streamline your payroll process with our reliable services. We handle everything from salary processing to tax filings, ensuring your team is paid accurately and on time."
  },
  {
    icon: Lightbulb,
    title: "Financial Consulting",
    description: "Gain a strategic partner to guide your financial future. We offer expert consulting on budgeting, forecasting, and financial planning to help your business achieve its goals."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Comprehensive financial solutions designed for your peace of mind.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
