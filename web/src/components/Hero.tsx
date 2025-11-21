// src/components/Hero.tsx
import { Button } from '@/components/ui/button' 
import mountainLogo from '../assets/images/mountain_logo_20250925_221253.png'
import mistyBackground from '../assets/images/misty_background_20250925_221255.png'

export default function Hero() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url(${mistyBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* semi-transparent overlay if needed */}
      <div className="bg-background/70">
        <div className="container mx-auto flex flex-col items-center justify-center py-24 text-center">
          <img
            src={mountainLogo}
            alt="VSM Schools Logo"
            className="h-20 w-20 mx-auto"
          />
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
