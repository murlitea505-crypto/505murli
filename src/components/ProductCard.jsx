import React, { useEffect, useRef, useState } from 'react'

const ProductCard = ({ name, weight, price, images = [] }) => {
  // images: array of image imports/paths
  const imgs = images && images.length ? images : []

  // WhatsApp link with prefilled message (India number without leading +)
  const waNumber = '917219998300'
  const message = encodeURIComponent(`Hello, I want to buy ${name} (${weight}) - Please share order details.`)
  const waHref = `https://wa.me/${waNumber}?text=${message}`

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const autoRef = useRef(null)

  useEffect(() => {
    // autoplay every 3s
    if (imgs.length <= 1) return
    autoRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % imgs.length)
    }, 3000)
    return () => clearInterval(autoRef.current)
  }, [imgs.length])

  const prev = (e) => {
    e && e.stopPropagation()
    setIndex((i) => (i - 1 + imgs.length) % imgs.length)
  }
  const next = (e) => {
    e && e.stopPropagation()
    setIndex((i) => (i + 1) % imgs.length)
  }

  const openLightbox = (i) => {
    setIndex(i)
    setIsOpen(true)
    // pause autoplay while open
    clearInterval(autoRef.current)
  }
  const closeLightbox = () => {
    setIsOpen(false)
    if (imgs.length > 1) {
      autoRef.current = setInterval(() => setIndex((i) => (i + 1) % imgs.length), 3000)
    }
  }

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-base-300 overflow-hidden">
      {imgs.length > 0 && (
        <div className="relative" onMouseEnter={() => clearInterval(autoRef.current)} onMouseLeave={() => {
          if (imgs.length > 1) autoRef.current = setInterval(() => setIndex((i) => (i + 1) % imgs.length), 3000)
        }}>
          <img src={imgs[index]} alt={`${name} ${index + 1}`} className="w-full h-40 object-cover cursor-pointer" onClick={() => openLightbox(index)} />

          {/* arrows */}
          {imgs.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-sm btn-circle bg-white/80 hover:bg-white z-20">
                ‹
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-sm btn-circle bg-white/80 hover:bg-white z-20">
                ›
              </button>
            </>
          )}
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title text-rose-700 font-bold">{name}</h2>

        <div className="divider my-2"></div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Weight:</span>
            <span className="badge badge-lg badge-outline">{weight}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold">Price:</span>
            <span className="text-2xl font-bold text-green-600">₹{price}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
            Buy Now
          </a>
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4">
            <img src={imgs[index]} alt={`${name} large`} className="w-full h-auto rounded" />
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle">‹</button>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle">›</button>
            <button onClick={(e) => { e.stopPropagation(); closeLightbox() }} className="absolute right-2 top-2 btn btn-sm">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard
