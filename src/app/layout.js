
export const metadata = {
  title: 'Nique Restaurant',
  description: 'We make the best meals and give the best services',
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
