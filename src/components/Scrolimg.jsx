import React from 'react'

function Scrolimg() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="bg-black text-white rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Break the Wi-Fi barrier</h2>
            <p className="mb-4 text-sm">
              Join MileagePlus® to access the fastest connectivity in the sky, for free. Now available on select United flights.
            </p>
            <button className="bg-white text-blue-700 px-4 py-2 text-sm rounded-full w-fit hover:bg-gray-100">Join now</button>
          </div>
          <div className="md:w-1/2">
            <img src="https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg" alt="Wi-Fi promo" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-4">
          <button className="text-xl text-gray-700 hover:text-black">‹</button>
          <span className="text-sm text-gray-700">1 / 6</span>
          <button className="text-xl text-gray-700 hover:text-black">›</button>
        </div>
      </div>
  )
}

export default Scrolimg