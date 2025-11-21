// components/Bootcamp.tsx
import { Button } from "@/components/ui/button";

export default function Bootcamp() {
  return (
    <section className="bg-softBackground py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading text-primary">
          Join the Bootcamp
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Week-by-week practice modules to build your visual systems fluency.
        </p>
        <Button className="mt-6">View Curriculum</Button>
      </div>
    </section>
  );
}
