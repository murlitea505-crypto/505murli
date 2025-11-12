import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/917219998300"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle btn-lg bg-green-100 hover:bg-green-300 border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0"
        title="Contact us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#74C0FC', fontSize: '2rem' }} />
      </a>
      
      {/* Animated pulse effect */}
      <div className="absolute inset-0 btn btn-circle btn-lg bg-green-400 rounded-full animate-pulse opacity-50 pointer-events-none"></div>
    </div>
  )
}

export default WhatsAppButton
