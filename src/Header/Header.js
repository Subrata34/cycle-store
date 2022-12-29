import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Register from '../Register/Register'

const Header = () => {
  return (
    <div>
        <div >
        <div> 
        <h1 style={{width:'10px'}}>Cycle store</h1>
        </div>
        <div>
            <Link to='/home' style={{margin:'20px',textDecorationLine:'none'}} >Home</Link>
            <Link to='/buy' style={{margin:'20px',textDecorationLine:'none'}} >Buy</Link>
            <Link to='/cycle' style={{margin:'20px',textDecorationLine:'none'}} >cycle</Link>
            <Link to='/serviceing' style={{margin:'20px',textDecorationLine:'none'}} >serviceing </Link>
            <Link style={{margin:'20px',textDecorationLine:'none'}} >Pre-Order</Link>
            
        </div>
        </div>
        <Banner></Banner>
        <Register></Register>
    </div>
  )
}

export default Header