import axios from 'axios';

const CardsService = {
	getEmployees:function() {
		const url = `http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true&delay=3`;
		return new Promise((resolve, reject) => {
			axios(url)
				.then((response) => {
					let convertedResponse = response.data.map(this.createEmployeeObject);
					resolve(convertedResponse);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},


	createEmployeeObject: function (rawPersonObject) {
		return {
			name : `${ rawPersonObject.firstName } ${ rawPersonObject.lastName }`,
			id : rawPersonObject.id,
			firstName : rawPersonObject.firstName,
			lastName : rawPersonObject.lastName,
			company : rawPersonObject.company,
			email : rawPersonObject.email
		}
	},

	filterEmployees:function (arr, filter, possibleKeys) {
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

}

export default CardsService;
