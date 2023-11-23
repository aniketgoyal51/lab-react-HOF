import React, { Component } from 'react'

export default class TotalAge extends Component {
    total=(userArr)=>{
        let count=0
        {userArr.filter((item)=>item.user_type==='Designer')
            .map((item)=>(
                    count+=item.years
            ))}
        return count
    }
  render(props) {
    let userArr =this.props.name;
    return (
      <div>
        <h1>Find the total years of designers</h1>
        <div>
            {this.total(userArr)}
        </div>
      </div>
    )
  }
}