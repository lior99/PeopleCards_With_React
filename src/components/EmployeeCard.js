import React from 'react';
import PropTypes from 'prop-types';

const EmployeeCard = ({ employee }) => (
	<div>
		<div className="employee-name">{ employee.name }</div>
		<div className="company">{ employee.company }</div>
		<div className="email">{ employee.email }</div>		
	</div>
);

EmployeeCard.propTypes = {
	employee : PropTypes.object.isRequired
}

export default EmployeeCard;