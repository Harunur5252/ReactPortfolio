import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'
import TopNavigation from '../TopNavigation/TopNavigation'
import Footer from '../Footer/Footer'

export default class LazyLoading extends Component {
  render() {
    return (
     <>
          <TopNavigation />
          <div style={{margin:'0 auto',marginTop:'12rem',textAlign:'center'}}>
            <ScaleLoader height={40} width={8} speedMultiplier={2} color="#36d7b7" />
          </div>
          <div style={{marginTop:'10rem'}}>
             <Footer />
          </div>
     </>
    )
  }
}
