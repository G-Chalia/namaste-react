import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestMenu from "./components/RestMenu";
import Profile from "./components/ProfileClass";
import ShimmerUI from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
// on demand loading --> upon render ---> react suspends

const AppLayout = () => {
  const [user, setUser] = React.useState({
    name: "Gaurav Chalia",
    email: "gaurav@javascript.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <HeaderComponent />
        {/* <Body /> */}
        {/****** For Nested Routing we have used Outlet */}
        {/***All Children will go into outlet */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
// For Children to be render create Outlet In the Parent component
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
