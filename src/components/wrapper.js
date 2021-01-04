import React from "react";
import "../styles/Main.css";

function wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}
export default wrapper    
