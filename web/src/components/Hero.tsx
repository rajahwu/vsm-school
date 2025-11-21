// src/components/Hero.tsx
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* semi-transparent overlay if needed */}
      <div className="bg-background/70">
        <div className="container mx-auto flex flex-col items-center justify-center py-24 text-center">
          <div className="h-20 w-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-2xl">
            VSM
          </div>
          <h1 className="mt-6 text-4xl font-heading text-primary md:text-6xl">
            Climb Higher. See Clearer.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A quiet place to master the visual systems craft.
          </p>
          <Button className="mt-8 bg-accent text-background">
            Start Your Practice
          </Button>
        </div>
      </div>
    </section>
  )
}
