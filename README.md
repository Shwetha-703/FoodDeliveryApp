# FoodDeliveryApp
FoodDeliveryApp

# Parcel
- Dev Build
- Local sever
- Hot module replacement (HMR)
- File matching algorithm which is written in C++
- Caching for faster builds
- Image optimization
- Bundling
- Minification
- Compression
- Code splitting
- Differential bundling - support for old browsers
- Diagnostics
- Error handling
- HTTPs
- Tree Shaking - reserve unused code
- Different dev and prod bundles

# Export-Import
- Default export/import
    export default Component
    import Component from "./ComponentsFolder/Componet"
- Named export/import
    export const Component
    import {Component} from "./ComponentFolder/Component"

# React Hooks
- normal js function given by React
- useState()
- useEffects()


# useState()
- can be used for API calls;
- For the cycle - load->render->api->rerender
- do not use outside of the component
- do not use it in conditional statements
- do not use it in loops

# useEffect()
- contains a callback function and a dependency array
- if no dependency array is specified, then it is called everytime the component is rendered.
- if empty dependency array is specified, then it is called only on inital render.
- if dependency array contains an element/somthing, it is called when it changes

# React Router DOM
- use to create paths for different components
- load child components inside parent components

# Types of Routing
- Client-side
- Server-side


# Components
- Functional components
- Class-based components

- While functional components are normal functions that return a jsx, class- based components are normal classes

- Class extends React.Component
- Contains render() function that returns a piece of jsx
- To pass and recive props, use a constructor with super()
- Access variables using the this keyword.
- Create state variables inside the constructor.
- Can also deconstruct these variables for simple usage
- Never update state variables directly in class components, use setState instead
    thi.setState({count : this.state.count+1})
- Sequence of rendering - > contructor(props), render(), componentDidMount()

# React Lifecycle
- render is optimzised by react.
- all render in done in a single batch
- Dom manipulation is expensive
- componentWillUnmount is called when we leave a page, and clear things, eg, setInterval
- for functional components, use the return method for cleanup 
    return ()=>{
        console.log("Cleanup called");
    }

# Optimizing our app
- Single responsibility principle
- Custom hooks
- Built-in hooks = useEffect, useState, useParams
- A hook is just a utility function
- RestaurantMenu fetched the data and also displays it. Ideally it shoud only be displaying the data.
- you can build custom hooks and publish it
- eg. Online/offline hooks.

# Chunking / Code splitting / Lazy loading / Dynamic bundling / on-demand loading / Dynamic import
- Load component on demand
- Done for very large apps to optimize 
- import {lazy, Suspense} from "react"
- import -----> const Instamart = lazy(()=>import("./components/Instamart")); 
- Wrap the component into Suspense with fallback component/jsx code

# CSS
- ChakraUI, Styled Components, Material UI, Tailwind, Bootstrap
- Tailwind cons - initial learning curve, lot of code in js file

# High-order components
- function that takes a component and returns a component
- added "promoted" to card
- updated menu items page to show all the differnt categories of food and corresponding items

# Controlled and un-controlled components
- The behaviour of a child component can be controlled by parent component
- Eg. Accordian

# Context
- Passing data from high level component to  component deep in hierachy is by props drilling
- eg. Logged in user data, Theme-light/dark
- createContext given by react, so create a context, eg. UserContext
- how to use ? import useContext hook and the created context
- const {logedInUser} = useContext(UserContext); 
- one can use a context in class-based components as well.
- if UserContext is created, then use UserContext.Consumer in class-based compoent.

# Redux
- It is not mandatory
- When your app get becomes big and the data needs to passed between components, then redux can be used.
- Redux is used for handling state of our app.
- Easy debugging
- Redux - A predictable state container for js application
- Two libraries =>> 1. React-redux 2. Redux Toolkit

# Redux store
- a big object
- kept at a global central place
- any component can access data from the store, it can read, or write
- for the object to not become big and clumsy, we have slices. small portion of redux store

# Redux toolkit
- install @reduxjs/toolkit & react-redux
- build a store
- connect store to app (using provider, wrap the app with provider and store as props )
- slice (cartslice)
- dispatch action 
- read using selector