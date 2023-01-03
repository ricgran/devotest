import { PropTypes } from "prop-types";
import "../styles/style.css";

function SuggestionsMenu({ items, search }){
    const style= {
        display: items.length === 0 
        ? "none" 
        : "block"
    }

    return(
        <div className="suggestionsMenu" style={ style }>
            {items.map((title) => {
                return (
                    <div className="suggestionsMenu-item" 
                        key={ title } 
                        onClick={ () => search(title) }
                    >
                        {title}
                    </div>
                );
            })}
        </div>
    )
}

SuggestionsMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    search : PropTypes.func.isRequired
}

export default SuggestionsMenu;