import React from 'react'

const About = () => {
  return (
  <div id="about" className="p-4 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
    <div tabIndex={0} className="collapse collapse-open bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">About</div>
  <div className="collapse-content text-sm space-y-6">
    <div>
      In 1975, CEO Babulal Rathi founded Murli Tea—a collection of specially curated blends designed to spark magical moments. Inspired by the rich heritage of India, this collection celebrates the glorious stories of tea in a simple yet evocative manner.
Each tea is nurtured amidst diverse flora, fauna, climates, and topographies, reflecting the depth and diversity of the Indian landscape. Carefully paired with spices, flavors, fruits, and flowers, every blend offers an unforgettable taste experience.
1975 is more than just a year—it's a celebration of truly Indian tea stories.
    </div>

    {/* Organic tea section - merged into same content area to avoid overlap */}
    <div className="mt-2">
      <h3 className="text-2xl md:text-3xl font-extrabold text-rose-700">ORGANIC TEA</h3>
      <p className="mt-3 leading-relaxed text-base">
        This single geo-organic tea, sourced from the sun kissed
        meadows of assam, presents a symphony of delicate floral
        notes that tantalise the taste buds. Each leaf captures the
        essence of nature’s purity and promises a luxurious
        experience of strong and sweet tea.
      </p>

      {/* Three info blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded-lg bg-base-200 text-center">
          <h4 className="font-semibold text-sm uppercase mb-2">CERTIFIED ORGANIC</h4>
          <p className="text-xs">Rigorously inspected and certified by accredited bodies.</p>
        </div>

        <div className="p-4 border rounded-lg bg-base-200 text-center">
          <h4 className="font-semibold text-sm uppercase mb-2">NATURAL GOODNESS</h4>
          <p className="text-xs">With all its known natural goodness and health benefits preserved.</p>
        </div>

        <div className="p-4 border rounded-lg bg-base-200 text-center">
          <h4 className="font-semibold text-sm uppercase mb-2">EXQUISITE TASTE</h4>
          <p className="text-xs">A symphony of delicate leaf elevating any culinary experience.</p>
        </div>
          </div>

          {/* Products small tables (Murli Tea, Murli Premium, Murli Gold) */}
          <div className="mt-8 space-y-8">
            {/* Murli Tea */}
            <section className="bg-base-100 p-4 rounded-md shadow-sm">
              <h3 className="text-2xl font-extrabold text-center mb-3">MURLI TEA</h3>
              <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                  <thead className="bg-primary text-primary-content">
                    <tr>
                      <th>SKU</th>
                      <th>VARIANT</th>
                      <th>PACK TYPE</th>
                      <th>CASE SIZE (Pcs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>250g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td>500g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>1 Kg</td>
                      <td>Assam</td>
                      <td>Zipper Pouch</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Murli Premium Tea */}
            <section className="bg-base-100 p-4 rounded-md shadow-sm">
              <h3 className="text-2xl font-extrabold text-center mb-3">MURLI PREMIUM TEA</h3>
              <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                  <thead className="bg-primary text-primary-content">
                    <tr>
                      <th>SKU</th>
                      <th>VARIANT</th>
                      <th>PACK TYPE</th>
                      <th>CASE SIZE (Pcs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>250g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td>1 Kg</td>
                      <td>Assam</td>
                      <td>Zipper Pouch</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Murli Gold Tea */}
            <section className="bg-base-100 p-4 rounded-md shadow-sm">
              <h3 className="text-2xl font-extrabold text-center mb-3">MURLI GOLD TEA</h3>
              <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                  <thead className="bg-primary text-primary-content">
                    <tr>
                      <th>SKU</th>
                      <th>VARIANT</th>
                      <th>PACK TYPE</th>
                      <th>CASE SIZE (Pcs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>250g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td>500g</td>
                      <td>Assam</td>
                      <td>Pouch</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>1 Kg</td>
                      <td>Assam</td>
                      <td>Zipper Pouch</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Closing paragraph asked by user */}
            <div className="prose max-w-none mt-6">
              <p>
                Truly, tea as it should be. Strong, robust and packed with flavor beyond all reckoning, Murli
                Gold tea delivers with this blend yet again. Taken either with milk, this brew is sure to get
                you feeling energized and revitalized, ready to take on new challenges, through the course of
                the day.
              </p>
            </div>
          </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About