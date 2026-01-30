import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dezzwork | وظيفتك تجيلك لحد عندك",
  description: "تنبيهات وخدمات رقمية فورية عبر واتساب.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
