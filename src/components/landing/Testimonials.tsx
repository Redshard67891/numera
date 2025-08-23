import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Numera transformed our financial tracking. Their attention to detail and proactive advice has been invaluable for our growth.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    avatar: "JD",
    img: "https://placehold.co/100x100.png"
  },
  {
    quote: "Tax season is no longer a stressful time for us, thanks to Numera. Their expertise and efficiency are second to none.",
    name: "John Smith",
    title: "Founder, Creative Co.",
    avatar: "JS",
    img: "https://placehold.co/100x100.png"
  },
  {
    quote: "The payroll services are a lifesaver. Everything is handled flawlessly, which lets me focus on my actual business.",
    name: "Samantha Lee",
    title: "Owner, The Local Cafe",
    avatar: "SL",
    img: "https://placehold.co/100x100.png"
  }
];

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
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
