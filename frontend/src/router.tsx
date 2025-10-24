import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ClientLayout } from "./layouts/ClientLayout";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])
