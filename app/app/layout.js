js
import "./globals.css";

export const metadata = {
  title: "Al Hodhod | الهدهد",
  description: "Car rental in Muscat"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
