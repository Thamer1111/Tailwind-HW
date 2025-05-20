import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-sm">
        <div className="flex justify-around mb-10">
          <h4 className="font-semibold mb-2">Popular topics</h4>
          <div className="bg-white rounded-sm flex justify-between text-black items-center"><input className='w-72 h-10 mx-2' type="text" placeholder='Searsh united' /> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></div>
    </div>
  
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <li><a href="#" className="hover:underline">Wi-Fi</a></li>
            <li><a href="#" className="hover:underline">Change flights</a></li>
            <li><a href="#" className="hover:underline">United Club</a></li>
            <li><a href="#" className="hover:underline">Refund</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">About United</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
       
        
      </div>
      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 United Airlines, Inc. All rights reserved.
      </div>
    </footer>

  )
}

export default Footer