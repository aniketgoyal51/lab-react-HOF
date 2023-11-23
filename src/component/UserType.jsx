import React, { Component } from 'react'

export default class UserType extends Component {

    renderall=(item)=>{
            return(
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>)
    }
  render(props) {
    let userArr =this.props.name;
    return (
      <div >
        <h1>Display all items</h1>
        {userArr.filter((items)=> items.user_type==='Designer')
            .map((items)=>(
                <div key={items.id} >
                    <ul>{this.renderall(items)}</ul>
                </div>
            ))}
      </div>
    )
  }
}
