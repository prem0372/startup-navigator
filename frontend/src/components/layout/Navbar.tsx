import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  function logout() {

    localStorage.removeItem("token");

    navigate("/login");

  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "AI Search", path: "/ai-search" },
    { name: "Resources", path: "/resources" },
    { name: "Bookmarks", path: "/bookmarks" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🚀 Startup Navigator
        </NavLink>

        <nav className="hidden gap-6 md:flex">

          {navItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        <div className="hidden gap-3 md:flex">

          {!token ? (

            <>

              <NavLink
                to="/login"
                className="rounded-lg border px-4 py-2"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Register
              </NavLink>

            </>

          ) : (

            <button
              onClick={logout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Logout
            </button>

          )}

        </div>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>

    </header>
  );
}

export default Navbar;