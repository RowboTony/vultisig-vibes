import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      {/* We'll replace this later too */}
      <header> ... </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
