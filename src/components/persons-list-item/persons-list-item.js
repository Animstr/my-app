import { Component } from 'react';
import './persons-list-item.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            favorite: false
        };
    }
    increaseStatus = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    makeFavorite = () => {
        this.setState(({favorite}) => ({
            favorite: !favorite
        }))
    }

    render() {
        const {name, salary, onDeleteItem} = this.props,
            {increase, favorite} = this.state;

        let classes = 'list-group-item d-flex justify-content-between';

        if (increase){
            classes += ' increase';
        }
        if (favorite){
            classes += ' like';
        }
        
        return (
            <li className={classes}>
                <span onClick={this.makeFavorite} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.increaseStatus} type="button"
                        className="btn-cookie btn-sm ">
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