import {
  Link,
  Outlet,
  RouterProvider as TanstackRouter,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { lazy } from "react";
import { authClient } from "src/shared/lib/auth";

const Login = lazy(() => import("src/pages/auth/Login"));
const SignUp = lazy(() => import("src/pages/auth/SignUp"));
const Dashboard = lazy(() => import("src/pages/dashboard/Dashboard"));

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
        <Link to="/login">Login</Link>
        <Link to="/sign_up">Sign up</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  },
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sign_up",
  component: SignUp,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
  beforeLoad: async () => {
    const { data } = await authClient.getSession();
    if (!data) {
      throw redirect({ to: "/login" });
    }
  },
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signUpRoute, dashboardRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

export function RouterProvider() {
  return <TanstackRouter router={router} />;
}
