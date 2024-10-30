import React, { useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import './Openings.css';

const jobListings = [
  { id: 1, title: 'Creative Front-end Developer', location: 'Harrogate (Flexible) / Full Time', category: 'Development', description: 'We are seeking a talented Front-end Developer to join our creative team. The ideal candidate will have a strong understanding of modern web technologies and a passion for creating engaging user experiences.' },
  { id: 2, title: 'UX/UI Designer', location: 'Remote / Full Time', category: 'Design', description: 'We\'re looking for a skilled UX/UI Designer to help shape the future of our digital products. The successful candidate will have a keen eye for design and a user-centered approach to problem-solving.' },
  { id: 3, title: 'Digital Marketing Specialist', location: 'London / Full Time', category: 'Marketing', description: 'We are hiring a Digital Marketing Specialist to drive our online presence and lead generation efforts. The ideal candidate will have experience in SEO, social media marketing, and content creation.' },
];

export default function JobListings() {
  const [openRoles, setOpenRoles] = useState(false);
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleRoles = () => setOpenRoles(!openRoles);
  const toggleRole = (id) => setExpandedRole(expandedRole === id ? null : id);

  const filteredJobs = activeFilter === 'All'
    ? jobListings
    : jobListings.filter(job => job.category === activeFilter);

  return (
    <div className="job-listings bg-black text-white p-4 sm:p-6  md:p-8 font-sans ">
      <div className='sm:cols-12'>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:cols-4">JOIN OUR TEAM</h1>
        <div className='sm:cols-4'></div>
        <p className="text-sm sm:text-base mb-6 sm:cols-4">
          Begin your career journey with us, where we challenge boundaries and redefine technology. Together, we will develop innovative solutions and create a meaningful impact in the digital landscape. Your future starts here!
        </p>
      </div>
      <button className="flex items-center border border-white py-2 px-4 mb-6" onClick={toggleRoles}>
        OPEN ROLES
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${openRoles ? 'rotate-180' : ''}`} />
      </button>

      {openRoles && (
        <div className='bg-gray-800 rounded-lg p-4 sm:p-6 md:p-6'>
          <div className="flex gap-2 sm:gap-4 mb-4">
            {['All', 'Design', 'Development', 'Marketing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg border border-white py-1 px-2 sm:py-2 sm:px-4 cursor-pointer ${activeFilter === filter ? 'bg-white text-black' : 'bg-transparent text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div>
            {filteredJobs.map((job) => (
              <div key={job.id} className="border-b border-gray-600 last:border-b-0">
                <div
                  className="flex justify-between items-center p-2 sm:p-4 cursor-pointer"
                  onClick={() => toggleRole(job.id)}
                >
                  <div>
                    <h3 className="font-semibold text-sm sm:text-lg">{job.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{job.location}</p>
                  </div>
                  {expandedRole === job.id ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
                {expandedRole === job.id && (
                  <div className="p-2 sm:p-4 bg-gray-700">
                    <p className="text-xs sm:text-sm">{job.description}</p>
                    <button className="bg-white text-black py-1 px-2 mt-2 sm:py-2 sm:px-4">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
