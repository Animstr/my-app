import { Component } from 'react';

import './persons-list-item.css';

class Person extends Component {
    constructor (props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    salaryValue = (e) => {
        let newSalary = e.target.value.slice(0, e.target.value.length - 1)
        this.setState(() => ({
            salary: newSalary
        }) )
        
        this.props.onChangeSalary(newSalary);
    }
    render () {
        const {name, salary, onDeleteItem, onProp, increase, favorite} = this.props;
    let classes = 'list-group-item d-flex justify-content-between';

    if (increase){
        classes += ' increase';
    }
    if (favorite){
        classes += ' like';
    }
    
    return (
        <li className={classes}>
            <span 
                onClick={onProp} 
                className="list-group-item-label"
                data-prop="favorite">{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + `$`}
                onChange={this.salaryValue}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    onClick={onProp} 
                    type="button"
                    className="btn-cookie btn-sm "
                    data-prop="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDeleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas list-group-item fa-star"></i>
            </div>
        </li>  
    )
    }
}

export default Person;