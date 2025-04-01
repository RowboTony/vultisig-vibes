export default function Layout({ children }) {
  return (
    <div className="bg-oxford text-white font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-oxford border-b border-secondary py-4 px-6 flex items-center justify-between">
        <div className="text-xl font-bold text-turquoise">Vultisig</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-turquoise transition">Features</a>
          <a href="#" className="hover:text-turquoise transition">Security</a>
          <a href="#" className="hover:text-turquoise transition">Download</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-tertiary text-sm py-6 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white opacity-50">© {new Date().getFullYear()} Vultisig. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://x.com/vultisig" target="_blank" className="hover:text-turquoise transition">X</a>
            <a href="https://linktr.ee/vultisig" target="_blank" className="hover:text-turquoise transition">Linktree</a>
          </div>
        </div>
      </footer>
    </div>
  );
}