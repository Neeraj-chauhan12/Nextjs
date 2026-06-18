import "./globals.css";

export const metadata = {
  title: "My First Next App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1 >My Website</h1>
        </nav>

        {children}

        <footer>
          <p className="bg-gray-500">Copyright 2026</p>
        </footer>
      </body>
    </html>
  );
}