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
- 

# useEffect()
- contains a callback function and a dependency array
- if no dependency array is specified, then it is called everytime the component is rendered.
- if empty dependency array is specified, then it is called only on inital render.
- if dependency array contains an element/somthing, it is called when it changes