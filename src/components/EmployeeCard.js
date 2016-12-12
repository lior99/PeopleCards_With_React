import React from 'react';

class EmployeeCard extends React.Component {
	render() {
		let employee = this.props.employee;

		return (
					<div>
						<div className="employee-name">{ employee.name }</div>
						<div className="company">{ employee.company }</div>
						<div className="email">{ employee.email }</div>		
					</div>
		);
	}
}

EmployeeCard.propTypes = {
	employee : React.PropTypes.object.isRequired
}


export default EmployeeCard;