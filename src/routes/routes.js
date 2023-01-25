// Layouts
import BaseLayout from "../layouts/BaseLayout"
import AuthLayout from "../layouts/AuthLayout"
import DashboardLayout from "../layouts/DashboardLayout"

// Pages
import Login from "../pages/Login"
import Register from '../pages/Register'
import Home from "../pages/Home"
import DashboardHome from "../pages/dashboard/Home"
import Error404 from "../pages/Error404"

export const auth = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home
  },
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: DashboardHome
  },
  // {
  //   path: "/:username",
  //   layout: DashboardLayout,
  //   component: DashboardHome
  // },
  {
    layout: BaseLayout,
    component: Error404,
  },
]

export const guest = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home
  },
  {
    path: "/login",
    layout: AuthLayout,
    component: Login
  },
  {
    path: "/register",
    layout: AuthLayout,
    component: Register
  },
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: DashboardHome
  },
  {
    layout: BaseLayout,
    component: Error404,
  },
]
