import { Component } from 'react';

import './search-bar.css';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    getInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        this.props.onSearch(e.target.value)
    }
    render () {
        return (
            <input 
            className='search-bar input-group'
            type="text"
            placeholder="Найти сотрудника"
            onChange={this.getInputValue}/>
        )
    }
}
export default SearchBar;