import Person from "../persons-list-item/persons-list-item";

import './persons.css';

const Persons = ({data, onDelete, onProp, onChangeSalary}) => {

    const employersList = data.map(item => {
        const {id, ...restItem} = item;
            return <Person 
                    key={id} 
                    {...restItem}
                    onDeleteItem = {() => onDelete(id)}
                    onProp = {(e) => onProp(id, e.currentTarget.getAttribute('data-prop'))}
                    onChangeSalary = {(newSalary) => onChangeSalary(newSalary, id)}/>
    })
    return (
        <ul className="app-list list-group">
            {employersList}
        </ul>
    );
}

export default Persons;