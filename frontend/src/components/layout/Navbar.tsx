function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Startup Navigator</h1>

        <div className="space-x-6">
          <span>Home</span>
          <span>Explore</span>
          <span>AI Search</span>
          <span>Resources</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;