import React from 'react';
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
			);
		});

		if (this.employeesCards.length === 0){
			this.employeesCards = <div className="no-data-found">No data found!</div>;
		}

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

Cards.propTypes = {
	filterFunc : React.PropTypes.func.isRequired,
	employees : React.PropTypes.array
};


export default Cards;