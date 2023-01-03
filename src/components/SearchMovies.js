import { useState, useEffect } from "react"
import SearchTools from "./SearchTools";
import SearchResults from "./SearchResults";
import { CallAPI } from "../helpers/helpers";
import "../styles/style.css"

function SearchMovies(){
    const [ searchResults, setSearchResults ] = useState([]);
    const [ searchOptions, setSearchOptions ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const results = await CallAPI("");
            setSearchOptions(results.map(i => { return i.name }));   
        }
        getData();
    }, []);

    const search = async (phrase) => {
        const results = await CallAPI(phrase);
        setSearchResults(results);
    }

    return (
        <div className="container">
            <h1>Devoteam test (Richard edition)</h1>
            <div className="partition">
                <SearchTools 
                    options={ searchOptions }
                    search={ search }
                />
            </div>          
            <div className="partition">
                <SearchResults 
                    items={ searchResults }
                />
            </div>
        </div>  
    )
}

export default SearchMovies;