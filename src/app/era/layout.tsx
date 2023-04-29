import '../../styles/globals.css'

export const metadata = {
  title: 'A test website for the time line',
  description: 'Bt Pikacnu',
}

export default function Era({children,}: {children: React.ReactNode}) {
  return (
    <html lang="zh-tw">
      <body>{children}</body>
    </html>
  )
}