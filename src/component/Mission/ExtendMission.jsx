import React from 'react'
import './Mission.css'
const ExtendMission = () => {
  return (
    <div className='' style={{width:"100%"}}>
      <div className='mission-title'>
        <h3>OUR MISSION</h3>
      </div>
      <div className="mission-wrapper">
        <div className='mission-sections'>
          <div className='section1'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission1.gif' />
            </div>
            <div className='text-wrapper'>
              <p><span>Struggling</span> with the ever-</p>
              <p>changing landscape of</p>
              <p>cryptocurrency and</p>
              <p><span>Web3?</span></p>
            </div>
          </div>
          <div className='section2'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission2.gif'  />
            </div>
            <div className='text-wrapper'>
              <p>We're here to help you</p>
              <p>tackle <span>every challenge</span></p>
              <p>along the way.</p>
            </div>
          </div>
          <div className='section3'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission3.gif' />
            </div>
            <div className='text-wrapper'>
              <p>Begin your journey to</p>
              <p>digital excellence in</p>
              <p><span>Web3</span> right here!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtendMission