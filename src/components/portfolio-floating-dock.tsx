"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { ThemeAwareIcon } from "@/components/theme-toggle-button" // Updated import
import { Home, FileText, Github, Linkedin, Mail, XIcon } from "lucide-react"

export function PortfolioFloatingDock() {
  const iconProps = {
    // className: "text-neutral-600 dark:text-neutral-300", // Color is handled by IconContainer
    // size: 20, // Lucide icons default to 24, IconContainer's motion.div will size the wrapper
  }

  const items = [
    {
      title: "Home",
      href: "#home",
      icon: <Home {...iconProps} />,
    },
    {
      title: "Resume",
      href: "https://firebasestorage.googleapis.com/v0/b/resume-builder-2024-3d12f.appspot.com/o/resume%2FResume_Alkush.pdf?alt=media&token=03f9d017-a106-47ed-b5b2-0c6d1a94fee0",
      icon: <FileText {...iconProps} />,
    },
    {
      title: "GitHub",
      href: "https://github.com/Alkush-Pipania",
      icon: <Github {...iconProps} />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/alkush-pipania-49269929b/",
      icon: <Linkedin {...iconProps} />,
    },
    {
      title: "X / Twitter",
      href: "https://x.com/alkushx", // Replace with actual URL
      icon: <XIcon {...iconProps} />, // Using XIcon for consistency
    },
    {
      title: "Email",
      href: "mailto:workofalkushpipania@gmail.com", // Replace with actual email
      icon: <Mail {...iconProps} />,
    },
    {
      title: "Toggle Theme",
      href: "#theme-toggle", // Special href to trigger theme toggle logic in FloatingDock
      icon: <ThemeAwareIcon />, // Use the new icon-only component
    },
  ]

  return (
    <FloatingDock
      items={items}
    // mobileClassName="translate-y-20" // Demo class, remove for production
    />
  )
}
