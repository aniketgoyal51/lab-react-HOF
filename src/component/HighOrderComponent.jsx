import React, { Component } from 'react'
import UserType from './UserType.jsx';
import AllData from './AllData.jsx';
import Age from './Age.jsx';
import TotalAge from './TotalAge.jsx';

class HighOrderComponent extends React.Component {
    constructor(){
        super()
        this.state={
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <div key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
        ));
        return mapRows;
    };
  render() {
    return (
        <>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
            <div>
                <UserType name={this.state.userData}/>
            </div>
            <div>
                <AllData name={this.state.userData}/>
            </div>
            <div>
                <Age name={this.state.userData}/>
            </div>
            <div>
                <TotalAge name={this.state.userData}/>
            </div>
        </>
        )
    }
}
export default HighOrderComponent