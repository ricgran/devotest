import { useState } from "react";
import { PropTypes } from "prop-types";
import SuggestionsMenu from "./SuggestionsMenu";

function SearchTools( { options, search } ) {
    const [ searchPhrase, setSearchPhrase ] = useState("");
    const [ suggestions, setSuggestions ] = useState([]);

    const handleInput = (value) => {
        setSearchPhrase(value)
        if(value.length > 0) {
            const filteredSuggestions = options.filter((movie) => 
                movie.toLowerCase().includes(value.toLowerCase())
            ).splice(0, 5)
            setSuggestions(filteredSuggestions);
        }else{
            setSuggestions([]);
        }   
    }

    const handleSearch = () => {
        search(searchPhrase)
        setSuggestions([])
    }

    const handleChildSearch = (title) => {
        setSearchPhrase(title);
        setSuggestions([]);
        search(title)
    }

    return (
        <div className="searchTools">
            <input 
                className="searchTools-input"
                type="text"
                data-testid="input"
                value={ searchPhrase }
                onChange={ (e) => handleInput(e.target.value) }
                onKeyUp={ (e) => {
                    if(e.key === "Enter") handleSearch()
                } }
            />
            <button 
                className="searchTools-btn"
                onClick={ () => handleSearch() }
            >
                Search!
            </button>
            
            <SuggestionsMenu 
                items={ suggestions } 
                search={ handleChildSearch }
            />
        </div>
    )
}

SearchTools.propTypes = {
    options : PropTypes.arrayOf(PropTypes.string).isRequired,
    search : PropTypes.func.isRequired
}

export default SearchTools;