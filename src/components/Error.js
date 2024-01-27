import React from 'react'
import {useRouteError} from "react-router-dom";

export const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <div className="errorpage">
                <h1>Oops</h1>
                <h2>{err.status}   :  {err.statusText}</h2>
            </div>
        </div>
    )
}
