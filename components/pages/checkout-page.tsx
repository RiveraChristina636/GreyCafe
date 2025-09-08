"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Clock, CreditCard } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category: string
  customizations?: string[]
}

interface CheckoutPageProps {
  onBack?: () => void
  cartItems?: CartItem[]
  onPlaceOrder?: (orderDetails: any) => void
}

const fixedLocation = {
  id: "flushing",
  name: "Grey Cafe",
  address: "19519 Northern Blvd, Flushing, NY 11358",
  estimatedTime: "15-20 min",
}

const timeSlots = [
  "ASAP (15-20 min)",
  "30 minutes",
  "45 minutes",
  "1 hour",
  "1 hour 15 min",
  "1 hour 30 min",
  "2 hours",
]

export function CheckoutPage({ onBack, cartItems = [], onPlaceOrder }: CheckoutPageProps) {
  const [selectedTime, setSelectedTime] = useState("")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.0875
  const total = subtotal + tax

  const handlePlaceOrder = () => {
    if (!selectedTime || !customerInfo.name || !customerInfo.phone) {
      alert("Please fill in all required fields")
      return
    }

    const orderDetails = {
      items: cartItems,
      location: fixedLocation,
      pickupTime: selectedTime,
      customer: customerInfo,
      total: total,
      orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
    }

    onPlaceOrder?.(orderDetails)
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Cart</span>
        </button>
      )}

      {/* Checkout Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">Checkout</h1>
        <p className="text-muted-foreground">Complete your order for pickup</p>
      </div>

      {/* Order Summary */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Order Summary</h3>
        <div className="space-y-2 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {item.quantity}x {item.name}
              </span>
              <span className="text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-3 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="text-foreground">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Pickup Location */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Pickup Location</h3>
        </div>
        <div className="p-3 rounded-lg border border-border bg-muted/20">
          <p className="font-medium text-foreground">{fixedLocation.name}</p>
          <p className="text-sm text-muted-foreground">{fixedLocation.address}</p>
          <p className="text-xs text-primary">Ready in {fixedLocation.estimatedTime}</p>
        </div>
      </div>

      {/* Pickup Time */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Pickup Time</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((time) => (
            <label
              key={time}
              className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name="time"
                value={time}
                checked={selectedTime === time}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <span className="text-sm text-foreground">{time}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Customer Information */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
            <input
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email (optional)</label>
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Payment Method</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Payment will be processed at pickup. We accept cash, credit cards, and mobile payments.
        </p>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
      >
        Place Order - ${total.toFixed(2)}
      </button>
    </div>
  )
}
