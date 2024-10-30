import React from 'react';
import './Team.css';
import LinkedIn from "/images/linkedin.png";

const Team = () => {
  const teamList = [
    {
      id: 1,
      name: "Ananda Prabhu Rajendran",
      position: "Managing Director",
      image: '/images/profile/profile1.png',
      linkedin: 'https://in.linkedin.com/',
    },
    {
      id: 2,
      name: "Abishek",
      position: "CEO",
      image: '/images/profile/profile2.png',
      linkedin: 'https://in.linkedin.com/',
    },
    {
      id: 3,
      name: "Raghu",
      position: "Chif design officer",
      image: '/images/profile/profile3.png',
      linkedin: 'https://in.linkedin.com/',
    },
    // Add more
  ];

  return (
    <>
      <div className='team-wrapper min-h-screen'>
        
          <div className="team-list-container">
            <div className="text-overlay">
              <p>We are a team of </p>
              <p><span>thinkers</span> & <span>makers</span>...</p>
            </div>
            <div className="carousel">
              <div className="group">
                {teamList.map((slide, index) => (
                  <div key={slide.id} className='card'>
                    <div className="card-content">
                      <img src={slide.image} alt={slide.name} className="profile-pic" />
                      <div className="info">
                        <div>
                          <h3>{slide.name}</h3>
                          <p>{slide.position}</p>
                        </div>
                        <a href={slide} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="group">
                {teamList.map((slide, index) => (
                  <div key={slide.id} className='card'>
                    <div className="card-content">
                      <img src={slide.image} alt={slide.name} className="profile-pic" />
                      <div className="info">
                        <div>
                          <h3>{slide.name}</h3>
                          <p>{slide.position}</p>
                        </div>
                        <a href={slide} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Team;