"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-navy group-[.toaster]:text-ivory group-[.toaster]:border-gold group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-ivory/70",
          actionButton:
            "group-[.toast]:bg-gold group-[.toast]:text-navy",
          cancelButton:
            "group-[.toast]:bg-olive/20 group-[.toast]:text-ivory",
        },
      }}
      {...props}
    />
  )
}

export { Toaster } 