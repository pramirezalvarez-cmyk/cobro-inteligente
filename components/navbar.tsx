"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollToForm = () => {
    const el = document.getElementById("contact-form")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  CI
                </span>
              </div>
              <span className="font-semibold text-lg">CobroInteligente</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#company"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              
            </Button>
            <Button size="sm" onClick={scrollToForm}>Solicitar acceso</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#resources"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <a
                href="#company"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button size="sm" className="w-full" onClick={scrollToForm}>
                  Solicitar acceso
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
