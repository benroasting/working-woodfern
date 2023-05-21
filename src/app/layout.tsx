//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//styles
import "../styles/globals.css";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Woodfern Floral Design',
  description: 'Central Tennessee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libre.className}>
      <Navbar />
      <main>{ children}</main>
      <Footer />
      </body>
    </html>
  )
}
