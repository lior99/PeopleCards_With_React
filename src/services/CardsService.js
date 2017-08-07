import co from 'co';

export function	getEmployees() {
	const fn =  co.wrap(function* (){
		const url = 'http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true';
		const blobData = yield fetch(url);
		const employeeData = yield blobData.json();
		const response = employeeData.map(_createEmployeeObject);
		return yield Promise.resolve(response);
	});

	return fn();
}


function _createEmployeeObject(rawPersonObject){
	return {
		name : `${ rawPersonObject.firstName } ${ rawPersonObject.lastName }`,
		id : rawPersonObject.id,
		firstName : rawPersonObject.firstName,
		lastName : rawPersonObject.lastName,
		company : rawPersonObject.company,
		email : rawPersonObject.email
	}
}

export function filterEmployees(arr, filter, possibleKeys) {
		if (filter === '') {
			return arr;
		}
		else {
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
}
