import Navigation from "../components/navigation"

export const metadata = {
  title: "Home | Next Movies",
  description: "The best movies on the best framework",
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
