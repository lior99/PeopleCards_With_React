import axios from 'axios';

function getEmployees() {
		const url = `http://www.filltext.com/?rows=200&id={index}&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true`;
		return new Promise((resolve, reject) => {
			axios(url)
				.then((response) => {
					let convertedResponse = response.data.map(createEmployeeObject);
					resolve(convertedResponse);
				})
				.catch((err) => {
					reject(err);
				});
		});
}

function createEmployeeObject(rawPersonObject) {
		return {
			name : `${ rawPersonObject.firstName } ${ rawPersonObject.lastName }`,
			id : rawPersonObject.id,
			firstName : rawPersonObject.firstName,
			lastName : rawPersonObject.lastName,
			company : rawPersonObject.company,
			email : rawPersonObject.email
		}
}


export { getEmployees };