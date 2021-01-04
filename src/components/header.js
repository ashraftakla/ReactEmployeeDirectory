import React, { Component } from "react";
import "../styles/Main.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Click on the carrots to filter by heading or use the search box</p>
            </div>
        )
    }
}