import { Component } from "react";

import Person from "../persons-list-item/persons-list-item";
import './persons.css';

class Persons extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {data, onDelete} = this.props;

        const employersList = data.map(item => {
            const {id, ...restItem} = item;
                return <Person 
                        key={id} 
                        {...restItem}
                        onDeleteItem = {() => onDelete(id)}
                        />
        })
        return (
            <ul className="app-list list-group">
                {employersList}
            </ul>
        )
    }
}

export default Persons;