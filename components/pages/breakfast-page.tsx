"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getItemImage } from "@/lib/image-mapping"

interface BreakfastItem {
  name: string
  price: string
  description?: string
}

interface BreakfastCategory {
  title: string
  items: BreakfastItem[]
}

interface BreakfastPageProps {
  onBack?: () => void
  addToCart?: (item: { id: string; name: string; price: string; image: string; category: string }) => void
}

export function BreakfastPage({ onBack, addToCart }: BreakfastPageProps) {
  const breakfastCategories: BreakfastCategory[] = [
    {
      title: "Breakfast Bowls & Food",
      items: [
        {
          name: "Açaí Bowl",
          price: "$15.95",
          description:
            "Açaí Purée, Oat, Granola, Almond Milk, Strawberries, Banana, Kiwi, Blueberries, Flaxseed, Chia Seed, Toasted Almond, Honey",
        },
        { name: "Mediterranean Grain Bowl", price: "$10.95" },
      ],
    },
    {
      title: "Smoothies",
      items: [
        { name: "Strawberry and Banana Smoothie", price: "$7.50" },
        { name: "Mixed Berry Smoothie", price: "$8.00" },
        { name: "Acai Berry Smoothie", price: "$9.00" },
        { name: "Mango Smoothie", price: "$8.00" },
      ],
    },
    {
      title: "Cold Drinks",
      items: [
        { name: "Iced Lemonade", price: "$5.50" },
        { name: "Mint Julia", price: "$6.50", description: "Iced, Mixed Berries, Mint" },
        { name: "Pineapple Passion", price: "$6.50", description: "Iced, Passionfruit, Pineapple" },
        { name: "Yuzu Mary", price: "$6.50", description: "Iced, Rosemary, Yuzu" },
        {
          name: "Organic Iced Tea",
          price: "$5.00",
          description: "Lychee, Peach, Mango, Raspberry, Apple flavors available",
        },
        { name: "Grapefruit Drinks", price: "$7.00" },
      ],
    },
    {
      title: "Healthy Options",
      items: [
        { name: "Banana Walnut Muffin (Vegan)", price: "$3.95" },
        { name: "Pumpkin Cranberry Muffin (Vegan)", price: "$4.95", description: "Vegan, Gluten Free" },
        { name: "Zucchini Muffin (Vegan, G/F)", price: "$5.50" },
        { name: "Apple Cinnamon Muffin (Vegan, G/F)", price: "$5.50" },
        { name: "Blueberry Muffin (V, G/F)", price: "$5.50" },
        {
          name: "Hazelnut Energy Bites",
          price: "$3.25",
          description: "Vegan, sugar free, bite sized balls of hazelnut, cacao, dates",
        },
        { name: "Strawberry Energy Bites", price: "$3.25" },
        { name: "Matcha Energy Bites", price: "$3.25" },
        { name: "Dubai Chocolate Energy Bites", price: "$3.25" },
      ],
    },
  ]

  const handleAddToCart = (item: BreakfastItem, categoryTitle: string) => {
    if (addToCart) {
      addToCart({
        id: `breakfast-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: item.name,
        price: item.price,
        image: getItemImage(item.name, "/breakfast-item.png"),
        category: "Breakfast",
      })
    }
  }

  return (
    <div className="space-y-6">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Menu</span>
        </button>
      )}

      <div className="space-y-8">
        {breakfastCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl font-bold text-foreground mb-4">{category.title}</h2>
            <div className="grid gap-4">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    <div className="ml-4 flex-shrink-0 flex items-center gap-3">
                      <div className="flex flex-col items-end gap-3">
                        <span className="text-lg font-bold text-accent">{item.price}</span>
                        {addToCart && (
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(item, category.title)}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
