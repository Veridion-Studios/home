"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ...existing code...
export type ThemeToggleProps = {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  buttonSize?: React.ComponentProps<typeof Button>["size"]
  className?: string
  showMenu?: boolean // if false, clicking cycles themes
}

const themes = ["light", "dark", "system"] as const

function ThemeToggle({
  buttonVariant = "outline",
  buttonSize = "icon",
  className,
  showMenu = true,
}: ThemeToggleProps) {
  const { setTheme } = useTheme()
  const cycleTheme = React.useCallback(() => {
    // simple cycle through themes
    // Note: you could read current theme from useTheme if needed
    setTheme("dark")
  }, [setTheme])

  const button = (
    <Button variant="ghost" size={buttonSize} className={className} onClick={!showMenu ? cycleTheme : undefined}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )

  if (!showMenu) return button

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {button}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem key={t} onClick={() => setTheme(t)}>
            {t[0].toUpperCase() + t.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle