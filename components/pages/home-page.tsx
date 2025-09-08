import { MenuGrid } from "../menu-grid"

interface HomePageProps {
  addToCart?: (
    item: { id: string; name: string; price: string; image: string; category: string },
    quantity: number,
  ) => void
}

export function HomePage({ addToCart }: HomePageProps) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance font-mono">Welcome to Grey Cafe</h1>
        <p className="text-muted-foreground text-lg mb-6 text-pretty font-sans">
          Discover our carefully crafted beverages and freshly baked goods, made with love and the finest ingredients.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground font-sans">Menu Items</div>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-primary">5★</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Years Serving</div>
          </div>
        </div>
      </div>

      {/* Featured Menu */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Featured Menu</h2>
        <MenuGrid category="drinks" addToCart={addToCart} />
      </div>
    </div>
  )
}
