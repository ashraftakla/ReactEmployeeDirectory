import React from "react";
function searchBox({ handleSearchChange }) {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="search"
                    aria-label="search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    )
}
export default searchBox