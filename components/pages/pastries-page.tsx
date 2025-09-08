"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getItemImage } from "@/lib/image-mapping"

interface PastryItem {
  name: string
  price: string
  description?: string
}

interface PastryCategory {
  title: string
  items: PastryItem[]
}

interface PastriesPageProps {
  onBack?: () => void
  addToCart?: (item: { id: string; name: string; price: string; image: string; category: string }) => void
}

export function PastriesPage({ onBack, addToCart }: PastriesPageProps) {
  const pastryCategories: PastryCategory[] = [
    {
      title: "Desserts & Cookies",
      items: [
        { name: "Belgium Chocolate Cookie", price: "$4.25", description: "Homemade Belgium Chocolate Chip Cookie" },
        { name: "Brownie", price: "$4.50", description: "David's Gluten Free Brownie" },
        { name: "Pumpkin Chai Cookie", price: "$4.25", description: "Pumpkin Chai flavored Cookie" },
      ],
    },
    {
      title: "Cakes",
      items: [
        { name: "Junior's Original Cheesecake", price: "$8.95" },
        { name: "Junior's Raspberry Cheesecake", price: "$8.95" },
        { name: "Junior's Chocolate Cake", price: "$8.50" },
        { name: "Red Velvet Slice", price: "$8.00" },
        { name: "Junior's Little Fella Original Cheesecake", price: "$4.95" },
        { name: "Junior's Little Fella Raspberry Swirl Cheesecake", price: "$4.95" },
      ],
    },
    {
      title: "Homemade Puddings",
      items: [
        {
          name: "Banana Pudding",
          price: "$8.50",
          description: "Rich texture filled with fresh bananas and Nilla wafers",
        },
        {
          name: "Matcha Pudding",
          price: "$8.50",
          description: "Made with high quality MEM Tea matcha powder. Contains caffeine",
        },
        { name: "Tiramisu Pudding", price: "$8.50", description: "Contains trace alcohol (0.44% ABV) and espresso" },
        {
          name: "Earl Grey Pudding",
          price: "$8.50",
          description: "Made with GREY's special cold brewed earl grey tea extract",
        },
        { name: "Cookies n Cream Pudding", price: "$8.50", description: "Homemade pudding with Oreo cookies" },
      ],
    },
    {
      title: "Macarons",
      items: [
        { name: "Birthday Cake Macaron", price: "$3.30" },
        { name: "Brownie Batter Macaron", price: "$3.30" },
        { name: "Caramel Macaron", price: "$3.30" },
        { name: "Chocolate Hazelnut Macaron", price: "$3.30" },
        { name: "Coconut Macaron", price: "$3.30" },
        { name: "Cookies N Cream Macaron", price: "$3.30" },
        { name: "Crème Brûlée Macaron", price: "$3.30" },
        { name: "Earl Grey Macaron", price: "$3.30" },
        { name: "Honey Lavender Macaron", price: "$3.30" },
        { name: "Matcha Latte Macaron", price: "$3.30" },
        { name: "Pistachio Macaron", price: "$3.30" },
        { name: "Raspberry Macaron", price: "$3.30" },
        { name: "Rose Macaron", price: "$3.30" },
        { name: "Strawberry Smoothie Macaron", price: "$3.30" },
        { name: "Vanilla Macaron", price: "$3.30" },
        { name: "Tiramisu Macaron", price: "$3.30" },
      ],
    },
  ]

  const handleAddToCart = (item: PastryItem, categoryTitle: string) => {
    if (addToCart) {
      addToCart({
        id: `pastries-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: item.name,
        price: item.price,
        image: getItemImage(item.name, "/pastry-item.png"),
        category: "Pastries",
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
        {pastryCategories.map((category, categoryIndex) => (
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
