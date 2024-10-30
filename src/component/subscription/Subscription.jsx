import React, { useState } from 'react'

export default function Subscription() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Newsletter subscription submitted with email:', email)
    setEmail('') 
  }
 


  return (
    <div className="min-h-full flex items-center justify-center p-4" >
      <div className="w- rounded-lg border px-20 py-20" style={{backgroundColor:'#05050566',borderColor:'#05050566'}}>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 mt-0 whitespace-nowrap overflow-hidden text-ellipsis">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-400 text-center mb-6">Subscribe to our newsletter and stay updated!</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@email.com"
            className="flex-grow px-4 py-2 rounded-2xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600"
            required
          />
          <button
            type="submit"
            className="px-2 py-1.5 rounded-2xl text-sm bg-gray-200 text-black font-semibold hover:bg-gray-300 transition-colors duration-300 sm:hover:animate-none animate-shake"
          >
            Subscribe now
          </button>
        </form>
      </div>
    </div>
  )
}