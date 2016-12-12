import React from 'react';

import { getEmployees, filterEmployees } from './services/CardsService';
import Cards from './components/Cards';

class App extends React.Component {
    constructor() {
      super();

      this.state = {employees : [], dataWasLoaded : false, hasFilter:false};
      this.filteredEmployees = [];
    }


    componentDidMount(){
            getEmployees()
                  .then(response => {
                      this.setState({employees: response, dataWasLoaded:true});
                  })
                  .catch(err => {
                      console.log('error getting employees data!', err);
                  });
    }

    filterText(value) {
       if (value.length === 0){
          this.setState({hasFilter : false });
       }
       else {
          const employeesArray = Array.from(this.state.employees);
          const filterByArray =  ['name', 'email', 'firstName', 'lastName','company'];
          this.filteredEmployees = filterEmployees(employeesArray, value, filterByArray);
          this.setState({hasFilter : true });  
      }
      
    }
  
    render() {
      let employees = this.state.hasFilter ? this.filteredEmployees : this.state.employees;

      if (!this.state.dataWasLoaded){
        return (
              <div className="loading">
                Loading...
              </div>
            
        )
      }
      else {
            return (
              <Cards employees={employees} filterFunc={this.filterText.bind(this)}></Cards>
            )      
      }
    } 
}


export default App;