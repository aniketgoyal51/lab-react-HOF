import React, { Component } from 'react'

export default class Age extends Component {

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
        <h1>Find all data based on age greater than 26 and less than and equals to 50</h1>
        {userArr.filter((items)=>items.age>26 && items.age<=50)
            .map((items)=>(
                <div key={items.id} >
                    <ul>{this.renderall(items)}</ul>
                </div>
            ))}
      </div>
    )
  }
}