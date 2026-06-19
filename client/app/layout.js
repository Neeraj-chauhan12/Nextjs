import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My First Next App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-500 text-white flex gap-4 items-center justify-end px-5 ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product/455">Product</Link>
        </nav>

        {children}

       
      </body>
    </html>
  );
}
