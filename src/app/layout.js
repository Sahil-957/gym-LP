import "./globals.css";

export const metadata = {
  title: "FitZone Gym",
  description: "Transform Your Body",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
