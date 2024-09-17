import { Component } from 'react';

import HeaderBlock from '../header-block/header-block';
import SearchBar from "../search-bar/search-bar";
import Filters from "../filters/filters";
import Persons from '../persons/persons';
import AddNewEmployee from '../add-new-employee/add-new-employee';

import './App.css';

class App extends Component {
  constructor (props) {
	super(props);
	this.state = {
			data: [{name: 'John', salary: 1000, activeClass: false, id: 1},
				{name: 'John', salary: 100, activeClass: false, id: 2},
				{name: 'John', salary: 10000, activeClass: true, id: 3}]
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({
					data: data.filter(item => item.id !== id)
		}))
	}
	onAddEmploye = (name, salary) => {
		const {id} = this.state.data[this.state.data.length - 1];
        let newEmployee = {name: name, salary: salary, activeClass: false, id: id + 1};
        return this.setState({
            data: [...this.state.data, newEmployee] 
        });
	}
	
	render (){
		return (
			<div className="app">
			  <HeaderBlock/>
			  <div className="nav-items">
					<SearchBar/>
					<Filters/>
				</div>
				<Persons data={this.state.data} onDelete={this.deleteItem}/>
				<AddNewEmployee data={this.state.data} onAddEmployee={this.onAddEmploye}/>
			</div>
		);
	}
}

export default App;