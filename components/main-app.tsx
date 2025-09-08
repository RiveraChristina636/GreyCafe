"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HomePage } from "@/components/pages/home-page"
import { AboutPage } from "@/components/pages/about-page"
import { ContactPage } from "@/components/pages/contact-page"
import { CareersPage } from "@/components/pages/careers-page"
import { DrinksPage } from "@/components/pages/drinks-page"
import { BakeryPage } from "@/components/pages/bakery-page"
import { PastriesPage } from "@/components/pages/pastries-page"
import { BreakfastPage } from "@/components/pages/breakfast-page"
import { SandwichesPage } from "@/components/pages/sandwiches-page"
import { CartPage } from "@/components/pages/cart-page"
import { CheckoutPage } from "@/components/pages/checkout-page"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category: string
  customizations?: string[]
}

export function MainApp() {
  const [currentPage, setCurrentPage] = useState("home")
  const [showNavigation, setShowNavigation] = useState(false)

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Iced Cappuccino",
      price: 4.25,
      quantity: 1,
      image: "/iced-cappuccino-coffee.jpg",
      category: "Drinks",
      customizations: ["Extra shot", "Oat milk"],
    },
    {
      id: "2",
      name: "Blueberry Muffin",
      price: 3.5,
      quantity: 1,
      image: "/blueberry-muffin.png",
      category: "Bakery",
    },
  ])

  const addToCart = (
    item: { id: string; name: string; price: string; image: string; category: string },
    quantity = 1,
  ) => {
    const priceNumber = Number.parseFloat(item.price.replace("$", ""))
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      // If item already exists, increase quantity
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem,
        ),
      )
    } else {
      // Add new item to cart
      const newCartItem: CartItem = {
        id: item.id,
        name: item.name,
        price: priceNumber,
        quantity,
        image: item.image,
        category: item.category,
      }
      setCartItems((prev) => [...prev, newCartItem])
    }
  }

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handlePlaceOrder = (orderDetails: any) => {
    // In a real app, this would send the order to a backend
    console.log("Order placed:", orderDetails)
    alert(`Order ${orderDetails.orderNumber} placed successfully! You'll receive a confirmation shortly.`)
    setCartItems([]) // Clear cart
    setCurrentPage("home") // Return to home
  }

  const renderCurrentPage = () => {
    const handleBackToMenu = () => setCurrentPage("home")

    switch (currentPage) {
      case "home":
        return <HomePage addToCart={addToCart} />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      case "careers":
        return <CareersPage />
      case "drinks":
        return <DrinksPage onBack={handleBackToMenu} addToCart={addToCart} />
      case "bakery":
        return <BakeryPage onBack={handleBackToMenu} addToCart={addToCart} />
      case "pastries":
        return <PastriesPage onBack={handleBackToMenu} addToCart={addToCart} />
      case "breakfast":
        return <BreakfastPage onBack={handleBackToMenu} addToCart={addToCart} />
      case "sandwiches":
        return <SandwichesPage onBack={handleBackToMenu} addToCart={addToCart} />
      case "cart":
        return (
          <CartPage
            onBack={handleBackToMenu}
            onCheckout={() => setCurrentPage("checkout")}
            cartItems={cartItems}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeFromCart}
          />
        )
      case "checkout":
        return (
          <CheckoutPage onBack={() => setCurrentPage("cart")} cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
        )
      default:
        return <HomePage addToCart={addToCart} />
    }
  }

  const getPageTitle = () => {
    switch (currentPage) {
      case "home":
        return "Menu"
      case "about":
        return "About Us"
      case "contact":
        return "Contact Us"
      case "careers":
        return "Careers"
      case "drinks":
        return "Drinks"
      case "bakery":
        return "Bakery"
      case "pastries":
        return "Pastries"
      case "breakfast":
        return "Breakfast"
      case "sandwiches":
        return "Sandwiches"
      case "cart":
        return "Cart"
      case "checkout":
        return "Checkout"
      default:
        return "Menu"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNavigation(!showNavigation)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <div className="w-5 h-5 flex flex-col justify-between">
                <div className="w-full h-0.5 bg-foreground rounded transition-transform duration-200"></div>
                <div className="w-full h-0.5 bg-foreground rounded transition-transform duration-200"></div>
                <div className="w-full h-0.5 bg-foreground rounded transition-transform duration-200"></div>
              </div>
            </button>
            <div>
              <h1 className="text-xl font-bold text-foreground">{getPageTitle()}</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Grey Cafe</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage("cart")}
              className="p-2 hover:bg-muted rounded-lg transition-colors relative"
              aria-label="Shopping cart"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-4 h-3 border-2 border-foreground rounded-sm relative">
                  {/* Cart handle */}
                  <div className="absolute -top-1 -left-0.5 w-1 h-1.5 border-l-2 border-t-2 border-foreground rounded-tl-sm"></div>
                  {/* Cart wheels */}
                  <div className="absolute -bottom-1.5 left-0.5 w-1 h-1 bg-foreground rounded-full"></div>
                  <div className="absolute -bottom-1.5 right-0.5 w-1 h-1 bg-foreground rounded-full"></div>
                  {/* Item count badge */}
                  {cartItems.length > 0 && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground font-bold">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Overlay */}
      {showNavigation && (
        <Navigation
          onClose={() => setShowNavigation(false)}
          onCategorySelect={(page) => {
            setCurrentPage(page)
            setShowNavigation(false)
          }}
        />
      )}

      {/* Category Tabs */}
      {currentPage === "home" && (
        <div className="sticky top-16 z-40 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex overflow-x-auto px-4 py-3 gap-2 scrollbar-hide font-sans">
              {["Drinks", "Bakery", "Pastries", "Breakfast", "Sandwiches"].map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentPage(category.toLowerCase())}
                  className="px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground font-sans"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pb-6 max-w-4xl mx-auto px-4">
        <div className="pt-6">{renderCurrentPage()}</div>
      </main>
    </div>
  )
}
