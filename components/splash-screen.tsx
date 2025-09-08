"use client"

import { useEffect } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center space-y-12">
        <div className="relative mx-auto w-28 h-36">
          {/* Coffee Cup Container */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-28">
            {/* Cup Body */}
            <div className="w-full h-full bg-gradient-to-b from-stone-100 to-stone-200 rounded-b-3xl border-2 border-stone-300 relative overflow-hidden">
              {/* Coffee Liquid */}
              <div className="absolute top-1 left-1 right-1 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-t-xl"></div>

              {/* Milk Foam Layer */}
              <div className="absolute top-1 left-1 right-1 h-6 bg-gradient-to-b from-stone-50 to-stone-100 rounded-t-xl opacity-95 border-b border-stone-200"></div>

              {/* Cup Rim */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-stone-200 rounded-t-3xl border-t-2 border-stone-300"></div>
            </div>

            {/* Black Straws - positioned to match prototype */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="absolute w-0.5 h-16 bg-stone-900 rounded-full transform -rotate-12 -translate-x-2"></div>
                <div className="absolute w-0.5 h-16 bg-stone-900 rounded-full transform rotate-12 translate-x-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-6xl font-bold text-stone-800 tracking-tight leading-none">Grey</h1>
          <h2 className="text-6xl font-bold text-stone-800 tracking-tight leading-none">Cafe</h2>
        </div>

        <div className="flex justify-center pt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-stone-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-stone-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-stone-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
