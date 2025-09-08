"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MenuItem {
  id: string
  name: string
  price: string
  image: string
  category: string
  description?: string
}

interface MenuGridProps {
  category: string
  addToCart?: (item: MenuItem, quantity: number) => void
}

export function MenuGrid({ category, addToCart }: MenuGridProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [quantity, setQuantity] = useState(1)

  const menuItems: MenuItem[] = [
    // Drinks
    {
      id: "1",
      name: "Iced Cappuccino",
      price: "$4.50",
      image: "/iced-cappuccino-coffee.jpg",
      category: "drinks",
      description: "Rich espresso with steamed milk and a layer of foam, served over ice. Perfect for warm days.",
    },
    {
      id: "2",
      name: "Cold Brew",
      price: "$3.75",
      image: "/cold-brew-coffee.png",
      category: "drinks",
      description: "Smooth, bold coffee brewed slowly with cold water for 12 hours. Less acidic and naturally sweet.",
    },
    {
      id: "3",
      name: "Latte",
      price: "$4.25",
      image: "/latte-coffee.png",
      category: "drinks",
      description: "Creamy espresso drink with steamed milk and a light layer of foam. A classic favorite.",
    },
    {
      id: "4",
      name: "Americano",
      price: "$3.50",
      image: "/americano-coffee.png",
      category: "drinks",
      description: "Bold espresso shots diluted with hot water. Simple, strong, and satisfying.",
    },
    {
      id: "5",
      name: "Matcha Latte",
      price: "$4.75",
      image: "/matcha-latte.png",
      category: "drinks",
      description: "Premium Japanese matcha powder whisked with steamed milk. Earthy and energizing.",
    },
    {
      id: "6",
      name: "Chai Tea",
      price: "$3.95",
      image: "/spiced-chai.png",
      category: "drinks",
      description: "Aromatic blend of black tea with warming spices like cinnamon, cardamom, and ginger.",
    },

    // Bakery
    {
      id: "7",
      name: "Croissant",
      price: "$3.25",
      image: "/fresh-croissant.jpg",
      category: "bakery",
      description: "Buttery, flaky pastry baked fresh daily. Light, airy texture with golden layers.",
    },
    {
      id: "8",
      name: "Blueberry Muffin",
      price: "$2.95",
      image: "/blueberry-muffin.png",
      category: "bakery",
      description: "Moist, tender muffin bursting with fresh blueberries and a hint of lemon zest.",
    },
    {
      id: "9",
      name: "Sourdough Bread",
      price: "$5.50",
      image: "/rustic-sourdough-loaf.png",
      category: "bakery",
      description: "Artisan sourdough with a crispy crust and tangy, chewy interior. Made with wild yeast starter.",
    },
    {
      id: "10",
      name: "Cinnamon Roll",
      price: "$3.75",
      image: "/single-cinnamon-roll.png",
      category: "bakery",
      description: "Soft, sweet dough swirled with cinnamon sugar and topped with cream cheese glaze.",
    },
    {
      id: "11",
      name: "Bagel",
      price: "$2.50",
      image: "/fresh-bagel.jpg",
      category: "bakery",
      description: "Hand-rolled and boiled bagel with a chewy texture. Available with various toppings.",
    },
    {
      id: "12",
      name: "Danish Pastry",
      price: "$3.95",
      image: "/danish-pastry.png",
      category: "bakery",
      description: "Delicate, buttery pastry with fruit filling. Light and flaky with a sweet finish.",
    },

    // Pastries
    {
      id: "13",
      name: "Chocolate Eclair",
      price: "$4.25",
      image: "/chocolate-eclair.png",
      category: "pastries",
      description: "Light choux pastry filled with vanilla cream and topped with rich chocolate glaze.",
    },
    {
      id: "14",
      name: "Fruit Tart",
      price: "$4.75",
      image: "/colorful-fruit-tart.png",
      category: "pastries",
      description: "Crisp pastry shell filled with vanilla custard and topped with fresh seasonal fruits.",
    },
    {
      id: "15",
      name: "Macarons",
      price: "$2.50",
      image: "/colorful-macarons.jpg",
      category: "pastries",
      description: "Delicate French cookies with smooth tops and ruffled feet, filled with ganache or buttercream.",
    },
    {
      id: "16",
      name: "Tiramisu",
      price: "$5.25",
      image: "/classic-tiramisu.png",
      category: "pastries",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
    },
    {
      id: "17",
      name: "Cheesecake",
      price: "$4.95",
      image: "/cheesecake-slice.png",
      category: "pastries",
      description: "Rich and creamy New York style cheesecake with graham cracker crust.",
    },
    {
      id: "18",
      name: "Profiteroles",
      price: "$4.50",
      image: "/profiteroles.jpg",
      category: "pastries",
      description: "Light choux pastry puffs filled with vanilla ice cream and drizzled with chocolate sauce.",
    },

    // Breakfast
    {
      id: "19",
      name: "Avocado Toast",
      price: "$8.95",
      image: "/avocado-toast.png",
      category: "breakfast",
      description: "Fresh avocado mashed with lime and sea salt on toasted sourdough, topped with microgreens.",
    },
    {
      id: "20",
      name: "Pancakes",
      price: "$9.50",
      image: "/fluffy-pancakes.jpg",
      category: "breakfast",
      description: "Stack of three fluffy buttermilk pancakes served with maple syrup and butter.",
    },
    {
      id: "21",
      name: "Eggs Benedict",
      price: "$12.95",
      image: "/eggs-benedict.png",
      category: "breakfast",
      description: "Poached eggs on English muffins with Canadian bacon, topped with hollandaise sauce.",
    },
    {
      id: "22",
      name: "Granola Bowl",
      price: "$7.75",
      image: "/granola-bowl.png",
      category: "breakfast",
      description: "House-made granola with Greek yogurt, fresh berries, and a drizzle of honey.",
    },
    {
      id: "23",
      name: "French Toast",
      price: "$10.25",
      image: "/french-toast.jpg",
      category: "breakfast",
      description: "Thick-cut brioche soaked in vanilla custard, grilled golden and dusted with powdered sugar.",
    },
    {
      id: "24",
      name: "Breakfast Burrito",
      price: "$9.95",
      image: "/breakfast-burrito.jpg",
      category: "breakfast",
      description: "Scrambled eggs with cheese, potatoes, and your choice of bacon or sausage in a flour tortilla.",
    },

    // Sandwiches
    {
      id: "25",
      name: "Club Sandwich",
      price: "$11.50",
      image: "/club-sandwich.jpg",
      category: "sandwiches",
      description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
    },
    {
      id: "26",
      name: "Grilled Cheese",
      price: "$7.95",
      image: "/grilled-cheese-sandwich.jpg",
      category: "sandwiches",
      description: "Classic comfort food with melted cheese on buttery grilled sourdough bread.",
    },
    {
      id: "27",
      name: "BLT",
      price: "$9.25",
      image: "/blt-sandwich.jpg",
      category: "sandwiches",
      description: "Crispy bacon, fresh lettuce, and ripe tomatoes with mayo on toasted bread.",
    },
    {
      id: "28",
      name: "Panini",
      price: "$10.75",
      image: "/panini-sandwich.jpg",
      category: "sandwiches",
      description: "Grilled sandwich with mozzarella, tomatoes, basil, and balsamic glaze on ciabatta.",
    },
    {
      id: "29",
      name: "Reuben",
      price: "$12.25",
      image: "/reuben-sandwich.jpg",
      category: "sandwiches",
      description: "Corned beef with sauerkraut, Swiss cheese, and Russian dressing on rye bread.",
    },
    {
      id: "30",
      name: "Veggie Wrap",
      price: "$8.95",
      image: "/veggie-wrap.png",
      category: "sandwiches",
      description: "Fresh vegetables with hummus and avocado wrapped in a spinach tortilla.",
    },
  ]

  const filteredItems = menuItems.filter((item) => item.category === category)

  const handleAddToCart = () => {
    if (selectedItem && addToCart) {
      addToCart(selectedItem, quantity)
      console.log(`Added ${quantity} ${selectedItem.name} to cart`)
    }
    setSelectedItem(null)
    setQuantity(1)
  }

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer border-border/50 group"
            onClick={() => setSelectedItem(item)}
          >
            <CardContent className="p-0">
              {/* Item Image */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Price Badge */}
                <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                  <span className="text-xs font-semibold text-foreground">{item.price}</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-3">
                <h3 className="font-medium text-sm text-foreground leading-tight text-balance group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground">
            <p className="text-lg font-medium">Coming Soon</p>
            <p className="text-sm mt-1">We're working on adding items to this category.</p>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedItem && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setSelectedItem(null)} />

          {/* Modal */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-sm md:max-w-md mx-auto">
            <Card className="overflow-hidden animate-in zoom-in-95 duration-300 shadow-2xl">
              <CardContent className="p-0">
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-8 h-8 p-0 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-sm"
                    onClick={() => setSelectedItem(null)}
                  >
                    <div className="w-4 h-4 relative">
                      <div className="absolute inset-0 w-full h-0.5 bg-foreground rounded transform rotate-45 top-1.5"></div>
                      <div className="absolute inset-0 w-full h-0.5 bg-foreground rounded transform -rotate-45 top-1.5"></div>
                    </div>
                  </Button>
                </div>

                {/* Product Image */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground text-balance">{selectedItem.name}</h2>
                    <p className="text-2xl font-bold text-primary mt-1">{selectedItem.price}</p>
                  </div>

                  {selectedItem.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Quantity</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 rounded-full hover:bg-muted bg-transparent"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 rounded-full hover:bg-muted bg-transparent"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full hover:scale-105 transition-transform duration-200"
                    onClick={handleAddToCart}
                  >
                    Add to Cart • {selectedItem.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
