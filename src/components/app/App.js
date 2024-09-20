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
			data: [{name: 'John', salary: 1000, increase: false, favorite: true, id: 1},
				{name: 'Alex', salary: 100, increase: false, favorite: false, id: 2},
				{name: 'Daniil', salary: 10000, increase: true, favorite: false, id: 3}],
			searchInput: '',
			filter: ''
		}
		
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({
					data: data.filter(item => item.id !== id)
		}))
	}
	onAddEmploye = (name, salary) => {
		const {id} = this.state.data[this.state.data.length - 1];
        let newEmployee = {name: name,
						salary: salary,
						increase: false,
						id: id + 1};
        return this.setState({
            data: [...this.state.data, newEmployee] 
        });
	}
	onProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}; 
				}
				return item;
			})
		}))
	}

	searchEmployee = (data, term) => {
		if (term.trim().length === 0){
			return data;
		} else {
			return data.filter(item => {
				return item.name.indexOf(term) > -1
			});
		}
	}
	searchState = (value) => {
		this.setState({
			searchInput: value
		})
	}

	filter = (data, filter) => {
			switch (filter) {
				case 'favorite':
					return data.filter(item => item.favorite)	
				case "moreThen1000":
					return data.filter(item => item.salary > 1000)
				default:
					return data
			}
	}
	onFilter = (filter) => {
		this.setState({
			filter: `${filter}`
		})
	}
	onChangeSalary = (newSalary, id) => {
		this.setState({
			data: this.state.data.map(item => {
				if (item.id === id) {
					return {...item, salary: newSalary};
				}
				return item
			})
		})
	}
	
	render (){
		const {searchInput, data} = this.state,
			visibleValue = this.filter(this.searchEmployee(data, searchInput), this.state.filter); 
		return (
			<div className="app">
			  <HeaderBlock 
			  		employeesCount={data.length}
					increaseCount={data.filter(item => item.increase === true)}/>
			  <div className="nav-items">
					<SearchBar onSearch={this.searchState}/>
					<Filters 
						favoriteFilter={() => this.onFilter('favorite')}
						salaryFilter={() => this.onFilter('moreThen1000')}
						noFilter={() => this.onFilter('')}
						filter = {this.state.filter}/>
				</div>
				<Persons 
					data={visibleValue}
					onDelete={this.deleteItem}
					onProp={this.onProp}
					onChangeSalary={this.onChangeSalary}/>
				<AddNewEmployee
					data={data} 
					onAddEmployee={this.onAddEmploye}/>
			</div>
		);
	}
}

export default App;