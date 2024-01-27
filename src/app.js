
import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { About } from "./components/About";
import { Error } from "./components/Error";
import {Contact} from "./components/Contact";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

const AppLayout = () =>{
    return (
        <div id="app">
            <Header/>
            <Outlet/>
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
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/",
                element: <Body/>
            },
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);