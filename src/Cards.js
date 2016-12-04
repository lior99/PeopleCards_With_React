import React from 'react';
// import { getEmployees } from './CardsService';
import EmployeeCard from './EmployeeCard';

class Cards extends React.Component {
	constructor() {
		super();
		
		this.employeesCards = [];
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
			<div className="cards-container">
 				{ this.employeesCards  }
			</div>
		);
	}
}




export default Cards;