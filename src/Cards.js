import React from 'react';
// import { getEmployees } from './CardsService';
import EmployeeCard from './EmployeeCard';

class Cards extends React.Component {
	constructor() {
		super();
		
		this.employeesCards = [];
		this.filterData = this.filterData.bind(this);
	}

	
	filterData(e) {
		let val = e.target.value;
		this.props.filterFunc(val);
	}


	render() {
		let employeesArray = typeof this.props.employees !== 'undefined' ? [...this.props.employees] : [];
		
		this.employeesCards = employeesArray.map((employee) => {
			return 	(
				<div className="employee" key={employee.name}>
					<EmployeeCard employee={employee}></EmployeeCard>
				</div>
			)
		});

		return (
			<div>
				<div className="filter-container">
					<input type="text" placeholder="filter..." className="filter" onChange={this.filterData}/>
				</div>
				<div className="cards-container">
 					{ this.employeesCards  }
				</div>
			</div>
		);
	}
}




export default Cards;