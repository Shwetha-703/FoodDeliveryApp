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
- 