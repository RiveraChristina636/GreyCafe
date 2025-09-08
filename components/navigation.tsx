"use client"

import { useEffect } from "react"

interface NavigationProps {
  onClose: () => void
  onCategorySelect: (category: string) => void
}

export function Navigation({ onClose, onCategorySelect }: NavigationProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "About Us", value: "about" },
    { label: "Contact Us", value: "contact" },
    { label: "Careers", value: "careers" },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Navigation Menu */}
      <div className="fixed top-16 left-4 right-4 md:left-auto md:right-4 md:w-80 z-50 animate-in slide-in-from-top-2 duration-300">
        <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden">
          {/* Close button */}
          <div className="flex justify-end p-2 border-b border-border bg-muted/30">
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <div className="w-4 h-4 relative">
                <div className="absolute inset-0 w-full h-0.5 bg-foreground rounded transform rotate-45 top-1.5"></div>
                <div className="absolute inset-0 w-full h-0.5 bg-foreground rounded transform -rotate-45 top-1.5"></div>
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={item.value}
                onClick={() => onCategorySelect(item.value)}
                className="w-full px-6 py-4 text-left hover:bg-muted transition-all duration-200 flex items-center justify-between group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <div className="w-2 h-2 border-r-2 border-b-2 border-muted-foreground transform rotate-45 group-hover:border-primary group-hover:translate-x-1 transition-all duration-200"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
