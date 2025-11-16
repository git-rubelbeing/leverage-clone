import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Get Levrg</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Services
            </a>
            <a href="#onboarding" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Onboarding
            </a>
            <a href="#resources" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Resources
            </a>
            <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contact
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost">Login</Button>
            <Button variant="secondary">Book a Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="#onboarding" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Onboarding
              </a>
              <a href="#resources" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Resources
              </a>
              <a href="#about" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost">Login</Button>
                <Button variant="secondary">Book a Call</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
