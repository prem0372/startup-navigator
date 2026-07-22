import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import AISearch from "../pages/AISearch";
import Resources from "../pages/Resources";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Bookmarks from "../pages/Bookmarks";
import ProtectedRoute from "../components/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
  path: "ai-search",
  element: (
    <ProtectedRoute>
      <AISearch />
    </ProtectedRoute>
  ),
},
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
      ),
  },
      {
      path: "bookmarks",
      element: (
        <ProtectedRoute>
        <Bookmarks />
        </ProtectedRoute>
      ),
  },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;