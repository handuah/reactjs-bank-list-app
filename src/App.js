import React from 'react';
import BankAccounts from './components/BankAccounts.js';
import Bootstrap from './assets/bootstrap.css';

class App extends React.Component{
    state = {
        accounts: [
            {accNumber: 90004321698, accName: 'Hannah Duah', bankName: 'Stanbic Bank', bankBranch: 'Achimota'},
            {accNumber: 90004321654, accName: 'Dennis Acheampong', bankName: 'Fidelity Bank', bankBranch: 'Kaneshie'},
             {accNumber: 90004321632, accName: 'Dennis Acheampong', bankName: 'Fidelity Bank', bankBranch: 'Kaneshie'}
        ]
    }

    deleteAccount = (accNumber) => {
    //   console.log(accNumber);
    //filter account that matches the accNumber whose delete button is clicked
    const newList = this.state.accounts.filter(accountNumber => {
        return accountNumber.accNumber !== accNumber
    })
    this.setState({
        accounts : newList
    })
    }

 render(){
    return (
    <div className="App">
     <div className="container">
        <h4 className="text-center pt-5">App</h4>
        <BankAccounts accounts={this.state.accounts} deleteAccount = {this.deleteAccount}/>
     </div>
    </div>
  )
 }
}

export default App;
