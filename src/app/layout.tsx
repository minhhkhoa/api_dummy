import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
