"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "As a small business owner, I was overwhelmed with managing my accounts. Numera stepped in and took the stress off my shoulders. They organized my books, provided clear monthly reports, and helped me understand my cash flow. Now I can focus on growing my business knowing my finances are in good hands.",
    name: "Alexander Hayes",
    title: "Small Business Owner",
    avatar: "AH",
    img: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "I was spending too much time trying to handle payroll and taxes on my own. Numera not only streamlined the process but also identified cost-saving opportunities I hadn't considered. Their expertise saved me money and gave me back precious time to focus on my team and operations.",
    name: "Sophia Bennett",
    title: "Restaurant Owner",
    avatar: "SB",
    img: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Tax season used to be a nightmare for me. Numera made it so simple. They ensured everything was accurate and filed on time, which saved me from penalties. Their team is professional, approachable, and always ready to answer my questions. I can’t imagine going through another tax season without them.",
    name: "Nathaniel Reed",
    title: "Freelance Designer",
    avatar: "NR",
    img: "https://picsum.photos/100/100?random=3"
  }
];

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            We're proud to have earned the trust of businesses across various industries.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={testimonialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="md:basis-1/2"
              >
                <CarouselItem className="p-4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      <p className="flex-grow text-foreground/80">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center">
                        <Avatar>
                          <AvatarImage src={testimonial.img} alt={testimonial.name} data-ai-hint="person portrait" />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-foreground/60">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
