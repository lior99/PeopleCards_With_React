export function	getEmployees() {
		// with 3 seconds delay
		// const url = `http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true&delay=3`;

		// without delay		
		const url = `http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true`;
		return new Promise((resolve, reject) => {
			fetch(url) // => using fetch api
				.then((response) => {
					response
						.json()
						.then(data => {
								let convertedResponse = data.map(_createEmployeeObject);
								resolve(convertedResponse);			
						 });
				})
				.catch((err) => {
					reject(err);
				});
		});
}


 function _createEmployeeObject(rawPersonObject) {
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




