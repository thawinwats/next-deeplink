export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center h-screen gap-4">
      {children}
    </div>
  )
}
