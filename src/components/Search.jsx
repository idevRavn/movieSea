import React from "react";
import searchIcon from "../assets/search.svg";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src={searchIcon} alt="Search"/>

                <input type="text"
                    placeholder="Search through thousands of movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;