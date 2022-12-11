import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'

export default class LazyLoading extends Component {
  render() {
    return (
      <div style={{margin:'0 auto',marginTop:'12rem',textAlign:'center'}}>
         <ScaleLoader height={40} width={8} speedMultiplier={2} color="#36d7b7" />
      </div>
    )
  }
}
