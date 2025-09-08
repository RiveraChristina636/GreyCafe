"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getItemImage } from "@/lib/image-mapping"

interface BakeryItem {
  name: string
  price: string
  description?: string
}

interface BakeryCategory {
  title: string
  items: BakeryItem[]
}

interface BakeryPageProps {
  onBack?: () => void
  addToCart?: (item: { id: string; name: string; price: string; image: string; category: string }) => void
}

export function BakeryPage({ onBack, addToCart }: BakeryPageProps) {
  const bakeryCategories: BakeryCategory[] = [
    {
      title: "Fresh Baked Goods",
      items: [
        { name: "Plain Croissant", price: "$3.95" },
        { name: "Almond Croissant", price: "$4.95" },
        { name: "Chocolate Croissant", price: "$4.95" },
        { name: "Butter Scone", price: "$3.75" },
        { name: "Cranberry Scone", price: "$3.75" },
        { name: "Oat Scone", price: "$3.75" },
        { name: "Cheese Danish", price: "$4.50" },
        { name: "Blueberry Danish", price: "$4.50" },
        { name: "Monkey Bread", price: "$4.95" },
        { name: "Chili Cheese Palmier", price: "$5.95" },
      ],
    },
    {
      title: "Muffins",
      items: [
        { name: "Banana Nut Muffin", price: "$4.25" },
        { name: "Blueberry Muffin", price: "$4.25" },
        { name: "Chocolate Cheesecake Muffin", price: "$4.25" },
        { name: "Double Chocolate Muffin", price: "$4.25" },
        { name: "Pumpkin Muffin", price: "$4.25" },
        { name: "Chocolate Chip Muffin", price: "$4.25" },
        { name: "Cappuccino Muffin", price: "$4.25" },
      ],
    },
    {
      title: "Bagels",
      items: [
        { name: "Plain Bagel", price: "$3.50" },
        { name: "Whole Wheat Bagel", price: "$3.50" },
        { name: "Everything Bagel", price: "$3.50" },
        { name: "Sesame Bagel", price: "$3.50" },
        { name: "Cinnamon Raisin Bagel", price: "$3.50" },
        { name: "Garlic Bagel", price: "$3.50" },
        { name: "Jalapeno Bagel", price: "$3.50" },
        { name: "Egg Bagel", price: "$3.50" },
      ],
    },
  ]

  const handleAddToCart = (item: BakeryItem, categoryTitle: string) => {
    if (addToCart) {
      addToCart({
        id: `bakery-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: item.name,
        price: item.price,
        image: getItemImage(item.name, "/bakery-item.png"),
        category: "Bakery",
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
        {bakeryCategories.map((category, categoryIndex) => (
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
