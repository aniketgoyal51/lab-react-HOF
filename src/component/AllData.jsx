import React, { Component } from 'react'

export default class AllData extends Component {

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
      <div>
        <h1>Filter all data starting with j</h1>
        {userArr.filter((items)=>items.name.includes('J'))
            .map((items)=>(
                <div key={items.id}>
                    <ul>{this.renderall(items)}</ul>
                </div>
            ))}
      </div>
    )
  }
}
