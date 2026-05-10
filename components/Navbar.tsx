export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          SpendWise AI
        </h1>

        <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
          Get Started
        </button>
      </div>
    </nav>
  );
}