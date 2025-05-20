import React from 'react'

function Mapsec() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
    <h2 className="text-2xl font-semibold mb-2">Explore destinations</h2>
    <p className="text-sm mb-4">Not sure where to go? Use our interactive map to find flights to great destinations.</p>
    <div className="bg-red-100 text-red-600 p-3 text-sm rounded mb-4">Sorry, no results have been found. Please enter a
      different origin/location or expand your search area.</div>
    <div className="flex justify-evenly flex-wrap gap-4 mb-4">
      <input type="text" placeholder="Riyadh RUH" className="border px-3 py-2 rounded w-full sm:w-64" />
      <input type="text" placeholder="Roundtrip" className="border px-3 py-2 rounded w-full sm:w-40" />
      <input type="text" placeholder="Dates" className="border px-3 py-2 rounded w-full sm:w-40" />
      <input type="text" placeholder="Max Price" className="border px-3 py-2 rounded w-full sm:w-40" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Search</button>
    </div>
    <div className="aspect-video w-full bg-gray-200 flex items-center justify-center text-gray-500">
      {/* <iframe className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/"
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe> */}
    </div>
  </div>
  )
}

export default Mapsec