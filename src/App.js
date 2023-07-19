import React from "react";
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

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* <Body /> */}
      {/****** For Nested Routing we have used Outlet */}
      {/***All Children will go into outlet */}
      <Outlet />
      <Footer />
    </>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
