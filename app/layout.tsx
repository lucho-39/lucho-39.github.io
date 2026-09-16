import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { siteDescription, siteName, siteUrl } from "@/lib/site"
import { Suspense } from "react"
import "./globals.css"

const siteTitle = "Lucho Santa Cruz — Desarrollador Web Full Stack"

export const metadata: Metadata = {
  // Required so Next resolves the open graph and twitter images to absolute
  // URLs. Without it the build falls back to http://localhost:3000.
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "desarrollador web",
    "desarrollador frontend",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "javascript",
    "rosario",
    "argentina",
  ],
  authors: [{ name: "Luciano Santa Cruz", url: "https://github.com/lucho-39" }],
  creator: "Luciano Santa Cruz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  // Tints the mobile browser chrome so it matches each theme.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
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
