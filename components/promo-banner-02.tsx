"use client"

import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const promoBannerData = {
  announcement: "Notice",
  message: "This website is currently under development. Some features may be incomplete or unavailable.",
  backgroundColor: "bg-secondary",
  textColor: "text-secondary-foreground",
  isDismissible: true,
}

export function PromoBannerTwo() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-4 py-3.5",
        promoBannerData.backgroundColor,
        promoBannerData.textColor
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="inline-flex items-center rounded-full bg-background/10 px-2.5 py-0.5 text-xs font-semibold">
          {promoBannerData.announcement}
        </span>
        <span className="font-medium">{promoBannerData.message}</span>
      </div>

      {promoBannerData.isDismissible && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute right-2 hover:bg-background/10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}