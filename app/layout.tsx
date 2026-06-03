import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased bg-black`}>
      <body className="min-h-full flex flex-col text-white m-12">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
