import React from 'react'
import ProductCard from '../ProductCard'

const waNumber = '917219998300'
const message = encodeURIComponent(`Hello, I want to buy Chai - Please share order details.`)
const waHref = `https://wa.me/${waNumber}?text=${message}`

// Import images per product folder using static globs (Vite requires string literals)
const chaiModules = import.meta.glob('/src/assets/products/chai/*.{png,jpg,jpeg,webp,avif}', { eager: true })
const goldModules = import.meta.glob('/src/assets/products/gold/*.{png,jpg,jpeg,webp,avif}', { eager: true })
const premiumModules = import.meta.glob('/src/assets/products/premium/*.{png,jpg,jpeg,webp,avif}', { eager: true })

const mapModulesToArray = (modules) => {
  if (!modules) return []
  return Object.keys(modules)
    .sort()
    .map((k) => {
      const mod = modules[k]
      return (mod && mod.default) ? mod.default : mod
    })
}

const chaiImages = mapModulesToArray(chaiModules)
const goldImages = mapModulesToArray(goldModules)
const premiumImages = mapModulesToArray(premiumModules)

const ProductListing = () => {
  const products = [
    {
      id: 1,
      name: 'Murli Chai',
      weight: '1 kg',
      price: 300,
      images: chaiImages
    },
    {
      id: 2,
      name: 'Murli Gold',
      weight: '1 kg',
      price: 300,
      images: goldImages
    },
    {
      id: 3,
      name: 'Murli Premium Tea',
      weight: '1 kg',
      price: 400,
      images: premiumImages
    }
  ]

  return (
    <div id="products" className="p-4 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">Our Premium Tea Collection</h1>
          <p className="text-lg text-gray-600 mb-6">Handpicked organic teas for the perfect brew</p>
          
          {/* Minimum Order Alert */}
          <div className="alert alert-info shadow-lg max-w-md mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-semibold text-base">Minimum Order: 30 kg</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              weight={product.weight}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Interested in bulk orders or custom packages?</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Contact Us for Bulk Orders
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductListing