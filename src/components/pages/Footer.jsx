import React from 'react'

const Footer = () => {
  // Smooth scroll to a section without changing the URL
  const handleNavClick = (id, e) => {
    if (e && e.preventDefault) e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('.navbar')
    const navHeight = nav ? nav.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
  <footer id="contact" className="bg-base-200 text-base-content">
      {/* Main section - Links and Socials */}
      <div className="footer footer-center bg-base-200 p-10 mt-8 md:mt-12 lg:mt-16">
        <nav className="w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:justify-center">
            <div className="flex flex-col items-start md:items-center">
              <h6 className="footer-title">Company</h6>
              <a href="#about" className="link link-hover" onClick={(e) => handleNavClick('about', e)}>About us</a>
              <a href="#products" className="link link-hover" onClick={(e) => handleNavClick('products', e)}>Products</a>
            </div>
            <div className="flex flex-col items-center text-center max-w-md">
              <h6 className="footer-title">Contact</h6>
              <p className="text-sm mb-1">Head Office: Falsoond Road Pokaran, Jaisalmer — Pin: 345021</p>
              <p className="text-sm mb-3">Branch: A/2 Mandore Krishi Mandi, Jodhpur — Pin: 342007</p>

              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Head Office Mobile:</span>
                  <div className="mt-1">
                    <a href="tel:+919784303402" className="link link-hover">+91 97843 03402</a>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Alternative:</span>
                  <div className="mt-1 space-x-2">
                    <a href="tel:+917665491001" className="link link-hover">+91 76654 91001</a>
                    <span className="text-gray-500">,</span>
                    <a href="tel:+919521341332" className="link link-hover">+91 95213 41332</a>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Branch Number:</span>
                  <div className="mt-1 space-x-2">
                    <a href="tel:+918005767817" className="link link-hover">+91 80057 67817</a>
                    <span className="text-gray-500">,</span>
                    <a href="tel:+917219998300" className="link link-hover">+91 72199 98300</a>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Email:</span>
                  <div className="mt-1">
                    <a href="mailto:MURLITEA505@gmail.com" className="link link-hover">MURLITEA505@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="footer-title">Follow Us</h6>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/murli_tea_comapany_/" target="_blank" rel="noopener noreferrer" className="inline-flex hover:opacity-75 transition-opacity cursor-pointer" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/murli_tea_comapany_/" target="_blank" rel="noopener noreferrer" className="inline-flex hover:opacity-75 transition-opacity cursor-pointer" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer