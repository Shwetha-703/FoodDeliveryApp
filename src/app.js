
import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { About } from "./components/About";
import { Error } from "./components/Error";
import Contact from "./components/ContactClass";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { useOnlineStatus } from "./utils/useOnlineStatus";

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <div id="app">
            <Header/>
            {onlineStatus ? <Outlet/>: <h3>Offline</h3>}
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense><Grocery/></Suspense>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);