import { PropTypes } from "prop-types";

function SearchResults({ items }){
    if(items.length < 1)
        return;

    return(
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Genres</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={ item.id }>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.duration / 60} minutes</td>
                                <td>{item.genres.join(", ")}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    ) 
}

SearchResults.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SearchResults;