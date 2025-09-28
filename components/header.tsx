import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Icon icon="fa7-solid:zap" className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-secondary">Safeguarding Africa</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium justify-center">
              <a
                href="#features"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Projects
              </a>
              <a
                href="#pricing"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-foreground/60 hover:text-foreground transition-colors text-muted"
              >
                Testimonials
              </a>
            </nav>
            <div className="flex items-center space-x-2 flex-1 justify-end text-muted">
              <Button size="sm">Partner With Us</Button>
            </div>
          </div>
        </div>
      </header>