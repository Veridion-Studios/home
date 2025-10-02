import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#ac48fa] to-[#8522e9]",
      yellow: "from-[#FF8A00] to-[#FFD14D]",
      blue: "from-[#1E90FF] to-[#0047FF]",
      cyan: "from-[#00E5FF] to-[#00A3FF]",
      green: "from-[#00E676] to-[#007A3A]",
      pink: "from-[#FF2D95] to-[#D1006E]",
      red: "from-[#FF3B30] to-[#C40000]",
      orange: "from-[#FF6A00] to-[#FF3D00]",
      indigo: "from-[#6366F1] to-[#2E00D6]",
      teal: "from-[#00C2A8] to-[#008E7A]",
      lime: "from-[#B4FF00] to-[#7AC100]",
      amber: "from-[#FFB020] to-[#FF6A00]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "red",
        "orange",
        "indigo",
        "teal",
        "lime",
        "amber",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});