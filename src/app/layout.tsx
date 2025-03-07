import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Providers } from "./Redux/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>

        <Providers>{children}</Providers>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
