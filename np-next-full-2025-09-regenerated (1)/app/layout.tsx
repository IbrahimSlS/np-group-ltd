export const metadata = {
  title: 'NP Group',
  description: 'Petroleum refinery & distribution company',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
