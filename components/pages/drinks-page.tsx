"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getItemImage } from "@/lib/image-mapping"

interface DrinkItem {
  name: string
  price: string
  description?: string
}

interface DrinkCategory {
  title: string
  items: DrinkItem[]
}

interface DrinksPageProps {
  onBack?: () => void
  addToCart?: (
    item: { id: string; name: string; price: string; image: string; category: string },
    quantity: number,
  ) => void
}

export function DrinksPage({ onBack, addToCart }: DrinksPageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState("brewed-coffee")

  const drinkCategories: Record<string, DrinkCategory> = {
    "brewed-coffee": {
      title: "Brewed Coffee",
      items: [
        { name: "Hot Brewed Coffee", price: "$3.00" },
        { name: "Iced Coffee", price: "$4.00" },
      ],
    },
    "cold-brew": {
      title: "Cold Brew",
      items: [
        {
          name: "Kyoto Cold Brew",
          price: "$7.50",
          description: "Slow-dripped in small batches, made fresh daily. Only a limited quantity available each day.",
        },
        { name: "Traditional Cold Brew", price: "$6.50", description: "Brewed in house for 18 hours" },
      ],
    },
    "iced-espresso": {
      title: "Iced Espresso",
      items: [
        { name: "Iced Americano", price: "$5.00" },
        { name: "Iced Latte", price: "$6.00" },
        { name: "Iced Mocha Latte", price: "$7.00" },
        { name: "Iced Caramel Macchiato", price: "$7.00" },
        { name: "Iced Pumpkin Spice Latte", price: "$7.00" },
        { name: "Café Crème", price: "$7.50", description: "Iced Only*" },
        {
          name: "Iced Chagaccino",
          price: "$8.00",
          description: "Organic Chaga Mushroom, Cacao, Cinnamon, Vanilla and Monk Fruit Sweetener",
        },
        { name: "Freddo Espresso", price: "$5.00", description: "Iced Only*" },
        {
          name: "Brown Sugar Freddo with Oat Milk",
          price: "$7.00",
          description: "Iced espresso beverage with organic raw brown sugar and oat milk",
        },
        {
          name: "Choco Freddo with Almond Milk",
          price: "$7.00",
          description: "Iced espresso beverage with chocolate syrup and almond milk",
        },
        { name: "Grey Foam Latte", price: "$7.50", description: "House made black sesame foam - Iced Only*" },
      ],
    },
    "hot-espresso": {
      title: "Hot Espresso",
      items: [
        { name: "Hot Americano", price: "$4.50" },
        { name: "Hot Cappuccino", price: "$5.50" },
        { name: "Hot Latte", price: "$5.50" },
        { name: "Hot Mocha Latte", price: "$6.50" },
        { name: "Hot Caramel Macchiato", price: "$6.50" },
        { name: "Hot Pumpkin Spice Latte", price: "$6.50" },
        {
          name: "Hot Chagaccino",
          price: "$7.50",
          description: "Organic Chaga Mushroom, Cacao, Cinnamon, Vanilla and Monk Fruit Sweetener",
        },
      ],
    },
    tea: {
      title: "Tea & Tea Lattes",
      items: [
        { name: "MEM Tea (caffeinated)", price: "$4.50", description: "Naturally contains caffeine" },
        { name: "MEM Tea (caffeine free)", price: "$4.50", description: "Caffeine free tea" },
        { name: "Hot Matcha Latte", price: "$7.00" },
        { name: "Iced Matcha Latte", price: "$7.50" },
        { name: "Hot Chai Latte", price: "$7.00" },
        { name: "Iced Chai Latte", price: "$6.00" },
        {
          name: "Hot Grey Tea Latte",
          price: "$7.00",
          description: "16-hour cold brewed earl grey tea with ice Sweet with milk",
        },
        {
          name: "Iced Grey Tea Latte",
          price: "$7.50",
          description: "16-hour cold brewed earl grey tea with ice Sweet with milk",
        },
      ],
    },
    specialty: {
      title: "Specialty Drinks",
      items: [
        { name: "Espresso Frappe", price: "$7.50" },
        { name: "Chocolate Frappe", price: "$7.50" },
        { name: "Mocha Frappe", price: "$7.50" },
        { name: "Caramel Frappe", price: "$7.50" },
        { name: "Matcha Frappe", price: "$8.50" },
        { name: "Chai Frappe", price: "$7.50" },
        {
          name: "Misugaru Frappe",
          price: "$7.50",
          description: "Blended iced beverage made with traditional Korean mixed grain powder",
        },
        { name: "Hot Misugaru Latte", price: "$7.00" },
        { name: "Iced Misugaru Latte", price: "$7.50" },
        { name: "Hot Chocolate", price: "$6.00" },
      ],
    },
  }

  const subcategories = [
    { key: "brewed-coffee", label: "Brewed Coffee" },
    { key: "cold-brew", label: "Cold Brew" },
    { key: "iced-espresso", label: "Iced Espresso" },
    { key: "hot-espresso", label: "Hot Espresso" },
    { key: "tea", label: "Tea & Lattes" },
    { key: "specialty", label: "Specialty" },
  ]

  const currentCategory = drinkCategories[selectedSubcategory]

  const handleAddToCart = (item: DrinkItem, index: number) => {
    if (addToCart) {
      const cartItem = {
        id: `drink-${selectedSubcategory}-${index}`,
        name: item.name,
        price: item.price,
        image: getItemImage(item.name, "/coffee-drink.png"),
        category: "drinks",
      }
      addToCart(cartItem, 1)
    }
  }

  return (
    <div className="space-y-6">
      {onBack && (
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Menu</span>
          </button>
        </div>
      )}

      {/* Subcategory Navigation */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.key}
            onClick={() => setSelectedSubcategory(subcategory.key)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 ${
              selectedSubcategory === subcategory.key
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {subcategory.label}
          </button>
        ))}
      </div>

      {/* Category Title */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">{currentCategory.title}</h2>
      </div>

      {/* Items Grid */}
      <div className="grid gap-4">
        {currentCategory.items.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                )}
                <div className="mt-2">
                  <span className="text-lg font-bold text-accent">{item.price}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex flex-col items-end gap-3">
                  <span className="text-lg font-bold text-accent">{item.price}</span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item, index)}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
