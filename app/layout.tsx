import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Churn Analyzer — Understand Why Subscribers Cancel',
  description: 'Automatically categorize and analyze cancellation feedback to identify churn patterns and boost retention with AI-powered insights.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8f319357-1467-4aad-b8c1-4f7f7b8b192f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
