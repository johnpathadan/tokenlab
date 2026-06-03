import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col text-white m-12">{children}</body>
    </html>
  );
}
