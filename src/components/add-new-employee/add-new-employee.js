import { Component } from 'react';
import './add-new-employee.css';

class AddNewEmployee extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddEmployee = (e) => {
        e.preventDefault();
        if (this.state.name !== '' && this.state.salary !== '') {
            this.props.onAddEmployee(this.state.name, this.state.salary);
        }
        this.setState({
            name: '',
            salary: ''
        })
    }
    render () {
        const {salary, name} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onInputValue}
                        name='name' 
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onInputValue}
                        name='salary'
                        value={salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onAddEmployee}
                            >Добавить
                            </button>
                </form>
            </div>
        )
    }
}

export default AddNewEmployee;