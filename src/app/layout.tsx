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
        <Providers>
          <header>
            <Header />
          </header>

          {children}

          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
