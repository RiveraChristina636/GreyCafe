"use client"

import { useState } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { MainApp } from "@/components/main-app"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <div className="min-h-screen">{showSplash ? <SplashScreen onComplete={handleSplashComplete} /> : <MainApp />}</div>
  )
}
