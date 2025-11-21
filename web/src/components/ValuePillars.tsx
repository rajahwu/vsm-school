// components/ValuePillars.tsx
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Mastery through Practice",
    desc: "Build your skill with structured exercises."
  },
  {
    title: "Clarity of Mind",
    desc: "Learn to think visually and reduce complexity."
  },
  {
    title: "Tools as Path to Wisdom",
    desc: "Harness visual tools to explore systems deeply."
  },
  {
    title: "Community & Curriculum",
    desc: "Grow alongside other systems-minded practitioners."
  }
];

export default function ValuePillars() {
  return (
    <section className="container mx-auto py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Card key={i} className="bg-background">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
