import React from 'react';
import { getEmployees, filterEmployees } from './services/CardsService';
import Cards from './components/Cards';

class App extends React.Component {
    constructor() {
        super();
				this.filterText = this.filterText.bind(this);

        this.state = {
					employees: [],
					dataWasLoaded: false,
					hasFilter:false,
					filteredEmployees: []
				};
    }


	async componentDidMount(){
        try {
            const response = await getEmployees();
            this.setState({
                    employees: response,
                    dataWasLoaded:true,
                    hasErrors: false
            });
            
        } catch(err) { 
            console.log('error getting employees data!', err);
            this.setState({
                hasErrors: true,
                dataWasLoaded: true
            })
        }
            
	}

	filterText(value) {
	   if (value.length === 0){
		  this.setState({hasFilter : false });
	   }
	   else {
		  const employeesArray = Array.from(this.state.employees);
		  const filterByArray =  ['name', 'email', 'firstName', 'lastName','company'];
		  const filteredEmployees = filterEmployees(employeesArray, value, filterByArray);
		  this.setState({
				hasFilter: true,
				filteredEmployees
			});
	  }

	}

	render() {
	  let employees = this.state.hasFilter ? this.state.filteredEmployees : this.state.employees;
		const { dataWasLoaded, hasErrors } = this.state;

        if (hasErrors) {
            return (
                <div style={{ fontSize: '20px', color: '#ff0000' }}>OOPS...Something went wrong</div>
            )
        }


        if (!dataWasLoaded) {
            return (
                    <div className="loading">
                        Loading...
                    </div>
                )
		}
		
		return (
			<Cards
                employees={employees}
                filterFunc={this.filterText}
            />
		)
	}
}


export default App;