import './globals.css'

export const metadata = {
  title: 'Spotify Clone',
  description: 'Clone do layout web do Spotify utilizando o NextJS + Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
