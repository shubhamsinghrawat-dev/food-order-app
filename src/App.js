import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import {useSelector} from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appstore from "./utils/appstore";
import Login from "./components/Login";

// const Grocery = lazy(() => import("./components/Grocery"));

  const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const data = {
      name: "Himanshu Kumar",
    };
    setUsername(data.name);
  }, []);

   

    
  return (
    <Provider store={appstore}>
      <div className="App">
        <Usercontext.Provider value={{ loggedinuser: username, setUsername }}>
          <Header />
          <Outlet />
        </Usercontext.Provider>
      </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/Login",
        element:<Login />,
      },
      // {
      //   path: "/Grocery",
      //   element: (
      //     <Suspense fallback={<div>Loading...</div>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      //   },
      {
        path:"/Cart",
        element:<Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
