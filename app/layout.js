import { Syne } from "next/font/google";
import "./globals.css";

// Custom fonts.
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Azhar Khan Dev",
  description: "Design. Code. Innovate. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.className}
         antialiased`}
         suppressContentEditableWarning>
        {children}
      </body>
    </html>
  );
}
