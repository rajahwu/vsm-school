// components/FooterCTA.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <footer className="bg-primary py-16 text-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading">Start Your Practice</h2>
        <p className="mt-2 text-background/80">
          Sign up to get early access to VSM Schools modules.
        </p>
        <form className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
          <Input
            type="email"
            placeholder="Your email"
            className="max-w-sm bg-background text-primary"
          />
          <Button type="submit" className="bg-accent text-background">
            Sign Up
          </Button>
        </form>
      </div>
    </footer>
  );
}
