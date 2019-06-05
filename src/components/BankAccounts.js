// BankAccount generating component

import React from 'react';

const BankAccounts = ({accounts, deleteAccount}) => {
    const accountList = accounts.length ? (
        accounts.map(account => {
            return(
               
            <tbody key={account.accNumber}>
                                        
                <tr>
                <td>{account.accNumber}</td>
                <td>{account.accName}</td>
                <td>{account.bankName}</td>
                <td>{account.bankBranch}</td>
                <td><button className="btn btn-info">Edit</button></td>
                <td><button onClick = {() => {deleteAccount(account.accNumber)}} className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        )
  
        })
    ) : (
        <p className="container">No account here</p>
    )
   
     return(
         <div className="container">
         <table className="table">
         <thead>
            <tr>
                <th scope="col">Account Number</th>
                <th scope="col">Account Name</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Bank Branch</th>
            </tr>
        </thead>
        {accountList}
         </table>
         
         </div>
     )   
}

export default BankAccounts