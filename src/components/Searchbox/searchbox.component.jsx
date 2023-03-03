import { Component } from "react";
import './searchbox.styles.css'

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, class_name } = this.props;
        return (
            <input
                type="search"
                placeholder={placeholder}
                className={`search-box ${class_name}`}
                onChange={onChangeHandler}
            />
        )
    }
}
export default SearchBox;