"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export type ThemeToggleProps = {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  buttonSize?: React.ComponentProps<typeof Button>["size"]
  className?: string
}

const themes = ["light", "dark"] as const

function ThemeToggle({
  buttonSize = "icon",
  className,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const currentIndex = themes.findIndex((t) => t === theme) >= 0 ? themes.findIndex((t) => t === theme) : 0

  const cycleTheme = React.useCallback(() => {
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }, [currentIndex, setTheme])

  return (
    <Button variant="ghost" size={buttonSize} className={className} onClick={cycleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle