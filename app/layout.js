import { M_PLUS_1_Code } from "next/font/google";
import "./globals.css";

const m_PLUS_1_Code = M_PLUS_1_Code({ subsets: ["latin"] });

export const metadata = {
  title: "ORIGIN.docのwebサイト",
  description: "学習塾ORIGIN.docのwebサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={m_PLUS_1_Code.className}>{children}</body>
    </html>
  );
}
