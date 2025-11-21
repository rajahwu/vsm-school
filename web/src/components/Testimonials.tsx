// components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "VSM Schools gave me the discipline I needed to diagram complex projects.",
    name: "Alex, Product Designer"
  },
  {
    quote: "The bootcamp structure made learning systems thinking effortless.",
    name: "Jordan, Ops Manager"
  },
  {
    quote: "Beautifully crafted exercises and a supportive community.",
    name: "Casey, Facilitator"
  }
];

export default function Testimonials() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl font-heading text-primary">
        What Learners Say
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-background">
            <CardContent className="p-6">
              <p className="italic text-muted-foreground">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-primary">{t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
