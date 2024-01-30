
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
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <Provider store={appStore}>
            <div id="app">
                <Header/>
                {onlineStatus ? <Outlet/>: <h3 className="justify-center border rounded-md p-4 m-4">Offline</h3>}
                <Footer/>
            </div>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);