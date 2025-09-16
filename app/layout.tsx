import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lucho - Desarrollador Web",
  description:
    "Portfolio de Lucho - Desarrollador Web Full Stack especializado en React, Next.js y tecnologías modernas",
  generator: "v0.app",
  keywords: ["desarrollador web", "portfolio", "react", "nextjs", "javascript", "typescript"],
  authors: [{ name: "Lucho" }],
  openGraph: {
    title: "Lucho - Desarrollador Web",
    description: "Portfolio de Lucho - Desarrollador Web Full Stack",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
