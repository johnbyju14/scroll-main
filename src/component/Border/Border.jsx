import React from 'react'
import './Border.css'
import Home from '../Home/Home'
import About from '../About/About'
import Product from '../Product/Product'
import Team from '../Team/Team'
import Explore from '../Explore/Explore'
import Bgvedio from '../Bg-vedio/Bgvedio'
import Contact from '../contact/Contact'
import Openings from '../Openings/Openings'
import Subscription from '../subscription/Subscription'
import ExtendMission from '../Mission/ExtendMission'
import Menu from '../Menuicon/Menu'
const Border = () => {
    return (
        <>
            <div className='root-wrapper p-8'>
                <div className="
          border-class
            border border-customgrey
            rounded-lg 
            relative 
            flex 
            flex-col 
            items-center 
            inset-0
            overflow-y-auto      
            z-10
          "   style={{
                        borderWidth: '1px',
                        borderColor: '#424242',
                        padding:'0px'
                    }} >
                        <Home/>
                        <Product/>
                        <Bgvedio/>
                        <ExtendMission/>
                        <Explore/>
                        <Subscription/>
                        <Contact/>

                </div>

            </div>
        </>
    )
}

export default Border