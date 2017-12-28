import React from 'react';
import EmployeeCard from './EmployeeCard';
import PropTypes from 'prop-types';

class Cards extends React.Component {
	constructor() {
		super();
		
		this.filterData = this.filterData.bind(this);
	}

	
	filterData(e) {
		let val = e.target.value;
		this.props.filterFunc(val);
	}

	render() {
		// let employeesArray = typeof this.props.employees !== 'undefined' ? [...this.props.employees] : [];
		let employeesArray = this.props.employees || [];
		let employeesCards = employeesArray.map(employee => {
			return 	(
				<div className="employee" key={employee.name}>
					<EmployeeCard employee={employee}></EmployeeCard>
				</div>
			);
		});

		if (employeesCards.length === 0){
			employeesCards = <div className="no-data-found">No data found!</div>;
		}

		return (
			<div>
				<div className="filter-container">
					<input type="text" placeholder="filter..." className="filter" onChange={this.filterData}/>
				</div>
				<div className="cards-container">
					{ employeesCards  }
				</div>
			</div>
		);
	}
}

Cards.propTypes = {
	filterFunc : PropTypes.func.isRequired,
	employees : PropTypes.array
};

export default Cards;