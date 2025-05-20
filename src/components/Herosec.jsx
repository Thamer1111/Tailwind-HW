import React from 'react'

function Herosec() {
  return (
    <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-14">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
            <div className="flex gap-4 text-sm font-medium mb-4">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Flight</button>
              <button>Packages</button>
              <button>Hotel</button>
              <button>Car</button>
              <button>Cruise</button>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm mb-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="trip" defaultChecked /> Roundtrip
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="trip" /> One-way
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Flexible dates
                </label>
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="From" className="border p-2 w-full rounded mb-2" />
                <input type="text" placeholder="To" className="border p-2 w-full rounded mb-2" />
              </div>
              <div className="flex gap-2 mb-2">
                <input type="date" className="border p-2 rounded w-1/2" />
                <input type="date" className="border p-2 rounded w-1/2" />
              </div>
              <select className="border p-2 w-full rounded mb-2">
                <option>1 Adult</option>
              </select>
              <select className="border p-2 w-full rounded mb-4">
                <option>Economy</option>
              </select>
              <div className="flex justify-between items-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Find flights</button>
                <a href="#" className="text-blue-600 text-sm underline">Find your travel credits</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Herosec