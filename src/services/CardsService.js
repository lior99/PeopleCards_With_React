const getEmployees = async() => {
	const url = 'http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true';
	const blobData = await fetch(url);
	const employeeData = await blobData.json();
	return employeeData.map(_createEmployeeObject);

	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		reject('simulating an erorr!')
	// 	}, 2000);
	// });
}

const _createEmployeeObject = (rawPersonObject) => {
	return {
		name : `${ rawPersonObject.firstName } ${ rawPersonObject.lastName }`,
		id : rawPersonObject.id,
		firstName : rawPersonObject.firstName,
		lastName : rawPersonObject.lastName,
		company : rawPersonObject.company,
		email : rawPersonObject.email
	}
}

const filterEmployees = (arr, filter, possibleKeys) => {
		if (filter === '') {
			return arr;
		}
	
		let lowerCaseFilter = filter.toLowerCase();
		let filteredArray = arr.filter((item) => {
			let storedItem = null;
			for(let key of possibleKeys) {
				if (item[key].toLowerCase().includes(lowerCaseFilter)) {
					storedItem = item;
					break;
				}
			}
			return storedItem;
		})

		return filteredArray;
}

export {
	getEmployees,
	filterEmployees
}